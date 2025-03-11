import { Suspense } from "react"
import { STORE_NAME } from "@lib/constants"
import { Phone } from "@medusajs/icons"
import { CITIES } from "@lib/config/cities"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base shadow-md">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex items-center h-full">
            <a href="tel:5165151951" className="hidden small:flex items-center gap-2 text-grey-90 transition-all bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded-md shadow-md hover:shadow-lg transform hover:translate-y-[-2px]">
              <div className="bg-white rounded-full p-1.5">
                <Phone className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white font-bold">CALL US NOW</span>
                <span className="text-sm font-bold text-white">(516) 515-1951</span>
              </div>
            </a>
            <a href="tel:5165151951" className="small:hidden flex items-center gap-2 text-grey-90 transition-all bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-md shadow-md hover:shadow-lg transform hover:translate-y-[-2px]">
              <div className="bg-white rounded-full p-1">
                <Phone className="w-3 h-3 text-orange-600" />
              </div>
              <span className="text-xs font-bold text-white">(516) 515-1951</span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-orange-600 uppercase font-bold tracking-wide transition-all transform hover:translate-y-[-2px]"
              data-testid="nav-store-link"
            >
              {STORE_NAME}
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <div className="relative group">
                <LocalizedClientLink
                  className="text-grey-60 hover:text-orange-600 font-medium transition-colors"
                  href="/service-area/queens-ny"
                >
                  Service Areas
                </LocalizedClientLink>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-grey-20">
                  {Object.values(CITIES).map((city) => (
                    <LocalizedClientLink
                      key={city.id}
                      href={`/service-area/${city.slug}`}
                      className="block px-4 py-3 text-grey-60 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                    >
                      {city.name}
                    </LocalizedClientLink>
                  ))}
                </div>
              </div>
              <LocalizedClientLink
                className="text-grey-60 hover:text-orange-600 font-medium transition-colors"
                href="/about-us"
              >
                About Us
              </LocalizedClientLink>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="text-grey-60 hover:text-orange-600 font-medium transition-colors"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="text-grey-60 hover:text-orange-600 font-medium transition-colors"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-grey-60 hover:text-orange-500 transition-all flex gap-2 transform hover:scale-[1.02]"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
