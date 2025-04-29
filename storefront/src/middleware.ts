import { HttpTypes } from "@medusajs/types"
import { notFound } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
const PUBLISHABLE_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us"

const regionMapCache = {
  regionMap: new Map<string, HttpTypes.StoreRegion>(),
  regionMapUpdated: Date.now(),
}

async function getRegionMap() {
  const needsUpdate =
    !regionMapCache.regionMap.size || // Check size instead of keys().next().value for robustness
    regionMapCache.regionMapUpdated < Date.now() - 3600 * 1000;

  if (needsUpdate) {
    if (process.env.NODE_ENV === "development" && BACKEND_URL?.includes("localhost")) {
      console.warn(
        "Middleware.ts: [Local Dev Mode] Skipping region fetch, assuming backend may be unavailable. Using empty/default region map. Start backend for full functionality."
      );
      regionMapCache.regionMap = new Map(); // Provide a fresh empty map
      regionMapCache.regionMapUpdated = Date.now(); // Mark as "updated" to prevent immediate re-evaluation
      return regionMapCache.regionMap;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/store/regions`, {
        headers: {
          "x-publishable-api-key": PUBLISHABLE_API_KEY!,
        },
        next: {
          revalidate: 3600, // controls caching for this fetch call
          tags: ["regions"],
        },
      });

      if (!res.ok) {
        // Log the error response if available
        let errorBody = "";
        try {
          errorBody = await res.text();
        } catch (e) {
        }
        throw new Error(`Failed to fetch regions: ${res.status} ${res.statusText}. Body: ${errorBody}`);
      }
      
      const responseData = await res.json();
      const regions = responseData.regions;


      if (!regions?.length) {
        console.warn("Middleware.ts: Medusa backend returned no regions. Using empty map.");
        regionMapCache.regionMap = new Map();
      } else {
        regionMapCache.regionMap = new Map(); // Clear before populating
        regions.forEach((region: HttpTypes.StoreRegion) => {
          region.countries?.forEach((c) => {
            regionMapCache.regionMap.set(c.iso_2 ?? "", region);
          });
        });
      }
    } catch (error: any) {
      console.error("Middleware.ts: Error fetching regions. Using empty/stale map.", error.message, error.cause?.code);
      regionMapCache.regionMap = new Map();
    }
    regionMapCache.regionMapUpdated = Date.now(); // Mark that an update attempt was made.
  }
  return regionMapCache.regionMap;
}

/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param response
 */
async function getCountryCode(
  request: NextRequest,
  regionMap: Map<string, HttpTypes.StoreRegion | number>
) {
  try {
    let countryCode

    const vercelCountryCode = request.headers
      .get("x-vercel-ip-country")
      ?.toLowerCase()

    const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase()

    if (urlCountryCode && regionMap.has(urlCountryCode)) {
      countryCode = urlCountryCode
    } else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
      countryCode = vercelCountryCode
    } else if (regionMap.has(DEFAULT_REGION)) {
      countryCode = DEFAULT_REGION
    } else if (regionMap.keys().next().value) {
      const firstKey = regionMap.keys().next().value;
      if (firstKey) {
        countryCode = firstKey
      }
    }
    
    // If no country code could be determined, default to DEFAULT_REGION or an empty string
    if (!countryCode) {
      countryCode = DEFAULT_REGION || ""
    }


    return countryCode
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a NEXT_PUBLIC_MEDUSA_BACKEND_URL environment variable?"
      )
    }
    return DEFAULT_REGION || ""
  }
}

/**
 * Middleware to handle region selection and onboarding status.
 */
export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const isOnboarding = searchParams.get("onboarding") === "true"
  const cartId = searchParams.get("cart_id")
  const checkoutStep = searchParams.get("step")
  const onboardingCookie = request.cookies.get("_medusa_onboarding")
  const cartIdCookie = request.cookies.get("_medusa_cart_id")

  const regionMap = await getRegionMap()
  const countryCode = await getCountryCode(request, regionMap)


  const urlHasCountryCode =
    countryCode && request.nextUrl.pathname.split("/")[1] === countryCode // Ensure exact match

  // check if one of the country codes is in the url
  if (
    urlHasCountryCode &&
    (!isOnboarding || onboardingCookie) &&
    (!cartId || cartIdCookie)
  ) {
    return NextResponse.next()
  }

  const redirectPath =
    request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname

  const queryString = request.nextUrl.search ? request.nextUrl.search : ""

  let redirectUrl = request.nextUrl.href

  let response = NextResponse.redirect(redirectUrl, 307)

  // If no country code is set in URL and we have a countryCode, we redirect to the relevant region.
  if (!urlHasCountryCode && countryCode) {
    if (countryCode) {
      redirectUrl = `${request.nextUrl.origin}/${countryCode}${redirectPath}${queryString}`
      response = NextResponse.redirect(`${redirectUrl}`, 307)
    } else {
       if (cartId && !checkoutStep) {
        redirectUrl = `${request.nextUrl.href}${request.nextUrl.search ? '&' : '?'}step=address` // Ensure correct query param joining
        response = NextResponse.redirect(`${redirectUrl}`, 307)
        response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
      }
      if (isOnboarding) {
        if (!(cartId && !checkoutStep)) {
            response = NextResponse.next() // Or redirect to a non-country-specific path if needed
        }
        response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 })
      }
      // If no country code and no cart/onboarding, just proceed
      if (!countryCode && !(cartId && !checkoutStep) && !isOnboarding) {
        return NextResponse.next()
      }
      return response;
    }
  }


  // If a cart_id is in the params, we set it as a cookie and redirect to the address step.
  if (cartId && !checkoutStep) {
    let targetUrl = response.url || redirectUrl; // Use the URL from the existing response if available
    if (!targetUrl.includes("step=address")) { // Avoid adding step multiple times
        targetUrl = `${targetUrl}${targetUrl.includes('?') ? '&' : '?'}step=address`;
    }
    
    if (response.status !== 307 && response.status !== 302 && response.status !== 301) {
        response = NextResponse.redirect(targetUrl, 307);
    } else {
        response = NextResponse.redirect(targetUrl, response.status);
    }
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  }

  // Set a cookie to indicate that we're onboarding. This is used to show the onboarding flow.
  if (isOnboarding) {
    if (response.status === 200 && response.headers.get("x-next-middleware-rewrite")) {
    }
    response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 })
  }
  
  if (response.url === request.nextUrl.href && response.status === 307 && !response.cookies.getAll().length) {
    return NextResponse.next();
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|robots.txt|sitemap.xml|.*\\.png|.*\\.jpg|.*\\.gif|.*\\.svg).*)"], // prevents redirecting on static files and SEO resources
}
