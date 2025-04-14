import { STORE_NAME } from "@lib/constants"

export type DumpsterService = {
  name: string
  description: string
  price?: string
  image?: string
}

export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": STORE_NAME,
    "url": process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com",
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com"}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(516) 515-1951",
      "contactType": "customer service",
      "areaServed": {
        "@type": "City",
        "name": "New York City",
        "containsPlace": [
          {
            "@type": "Borough",
            "name": "Queens",
            "postalCode": ["11361", "11362", "11363", "11364", "11354", "11355", "11356", "11357", "11358", "11359", "11360"]
          },
          {
            "@type": "Borough",
            "name": "Manhattan",
            "postalCode": ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10009", "10010", "10011", "10012"]
          },
          {
            "@type": "Borough",
            "name": "Brooklyn",
            "postalCode": ["11201", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210", "11211", "11212"]
          },
          {
            "@type": "Borough",
            "name": "Bronx",
            "postalCode": ["10451", "10452", "10453", "10454", "10455", "10456", "10457", "10458", "10459", "10460", "10461"]
          }
        ]
      },
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001", // Replace with actual postal code
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/jbsbuilderlic", // Replace with actual social links
      "https://instagram.com/jbsbuilderlic",
      "https://twitter.com/jbsbuilderlic"
    ]
  }
}

export const createServiceSchema = (service: DumpsterService) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} Dumpster Rental - ${STORE_NAME}`,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": STORE_NAME
    },
    "areaServed": {
      "@type": "City",
      "name": "New York City",
      "containsPlace": [
        {
          "@type": "Borough",
          "name": "Queens",
          "postalCode": ["11361", "11362", "11363", "11364", "11354", "11355", "11356", "11357", "11358", "11359", "11360"]
        },
        {
          "@type": "Borough",
          "name": "Manhattan",
          "postalCode": ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10009", "10010", "10011", "10012"]
        },
        {
          "@type": "Borough",
          "name": "Brooklyn",
          "postalCode": ["11201", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210", "11211", "11212"]
        },
        {
          "@type": "Borough",
          "name": "Bronx",
          "postalCode": ["10451", "10452", "10453", "10454", "10455", "10456", "10457", "10458", "10459", "10460", "10461"]
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": service.price || "Call for pricing",
      "priceCurrency": "USD"
    },
    "image": service.image
  }
}

export const createFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What size dumpster do I need for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For home renovations and small cleanouts, a 10-yard dumpster is typically sufficient. For larger projects like construction or complete home cleanouts, we recommend 20-40 yard dumpsters. Contact us for a personalized recommendation based on your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I keep the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard rental periods are 7-10 days, but we offer flexible rental periods to accommodate your project timeline. Contact us for custom rental duration options."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for a dumpster in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permits are typically required for street placement in NYC. However, if the dumpster is placed on your private property, no permit is needed. We can assist with permit acquisition if necessary."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide dumpster rental services throughout NYC, including Queens, Brooklyn, Manhattan, and the Bronx. We offer same-day delivery in most service areas."
        }
      },
      {
        "@type": "Question",
        "name": "What materials are not allowed in the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hazardous materials, batteries, paint, oils, asbestos, and certain electronics cannot be disposed of in our dumpsters. Contact us for a complete list of prohibited items."
        }
      },
      {
        "@type": "Question",
        "name": "Can I extend my dumpster rental period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can extend your rental period by contacting our customer service. Extension fees may apply based on the dumpster size and additional time needed."
        }
      }
    ]
  }
}

export const createAggregateRatingSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": STORE_NAME,
      "image": `${process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com"}/images/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main St",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "11354",
        "addressCountry": "US"
      }
    },
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export const createBreadcrumbSchema = (items: Array<{name: string, item: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com"}${item.item}`
    }))
  }
}

export const createLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": STORE_NAME,
    "image": `${process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com"}/images/logo.png`,
    "priceRange": "$$$",
    "telephone": "(516) 515-1951",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "11354",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "New York City",
      "containsPlace": [
        {
          "@type": "Borough",
          "name": "Queens",
          "postalCode": ["11361", "11362", "11363", "11364", "11354", "11355", "11356", "11357", "11358", "11359", "11360"]
        },
        {
          "@type": "Borough",
          "name": "Manhattan",
          "postalCode": ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10009", "10010", "10011", "10012"]
        },
        {
          "@type": "Borough",
          "name": "Brooklyn",
          "postalCode": ["11201", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210", "11211", "11212"]
        },
        {
          "@type": "Borough",
          "name": "Bronx",
          "postalCode": ["10451", "10452", "10453", "10454", "10455", "10456", "10457", "10458", "10459", "10460", "10461"]
        }
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.6996338,
      "longitude": -73.8290081
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "url": process.env.NEXT_PUBLIC_BASE_URL || "https://jbsdumpster.com"
  }
}
