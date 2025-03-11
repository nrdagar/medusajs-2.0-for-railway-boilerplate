import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import { STORE_NAME } from "@lib/constants"
import { CITIES } from "@lib/config/cities"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ContactForm from "@modules/common/components/contact-form"

export default async function Footer() {
  const { collections } = await getCollectionsList()
  const { product_categories } = await getCategoriesList()

  // Slice to show only first 6 items
  const displayCollections = collections?.slice(0, 6) || []
  const displayCategories = product_categories?.slice(0, 6) || []

  return (
    <footer className="border-t border-ui-border-base">
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-16 bg-white">
          <div className="flex flex-col lg:col-span-4">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-grey-90 hover:text-orange-600 uppercase mb-8"
            >
              {STORE_NAME}
            </LocalizedClientLink>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-4 shadow-sm">📞</span>
                <a href="tel:5165151951" className="text-grey-70 hover:text-orange-600 font-semibold transition-colors text-lg">
                  (516) 515-1951
                </a>
              </div>
              <div className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-4 shadow-sm">📍</span>
                <address className="text-grey-70 not-italic font-medium">
                  87-40 121 street<br />
                  Richmond Hill, NY 11418
                </address>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-grey-90 mb-6">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-4">
              <li>
                <LocalizedClientLink
                  href="/about-us"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium"
                >
                  About Us
                </LocalizedClientLink>
              </li>
              {Object.values(CITIES).map((city) => (
                <li key={city.id}>
                  <LocalizedClientLink
                    href={`/service-area/${city.slug}`}
                    className="text-grey-60 hover:text-orange-600 transition-colors font-medium"
                  >
                    {city.name} Service Area
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-xl border border-grey-20 lg:col-span-8">
            <ContactForm inFooter={true} />
          </div>
        </div>
        
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted border-t border-ui-border-base pt-6">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
