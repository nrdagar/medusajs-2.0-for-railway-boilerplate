import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import { STORE_NAME } from "@lib/constants"
import { CITIES } from "@lib/config/cities"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ContactForm from "@modules/common/components/contact-form"

export default async function Footer() {
  // const { collections } = await getCollectionsList()
  // const { product_categories } = await getCategoriesList()

  // Slice to show only first 6 items
  // const displayCollections = collections?.slice(0, 6) || []
  // const displayCategories = product_categories?.slice(0, 6) || []

  return (
    <footer className="border-t border-ui-border-base bg-grey-5">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Company Info Column */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-grey-90 hover:text-blue-600 uppercase mb-6"
            >
              {STORE_NAME}
            </LocalizedClientLink>
            
            <p className="text-grey-60 mb-6 text-sm">
              Exploring the life, companies, and vision of Elon Musk, a visionary entrepreneur and innovator.
            </p>
            
            {/* Removed phone and address */}
          </div>
          
          {/* Site Navigation Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Site Navigation</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <LocalizedClientLink
                  href="/"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Home
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/about-us" // This is the biography page
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Biography
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-companies"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Companies
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-timeline"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Timeline
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-gallery"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Gallery
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
          
          {/* Companies Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Key Companies</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <LocalizedClientLink
                  href="/elon-companies#tesla"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Tesla
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-companies#spacex"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  SpaceX
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-companies#neuralink"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Neuralink
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/elon-companies#boring"
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  The Boring Company
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
          
          {/* Legal Links Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Legal</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <LocalizedClientLink
                  href="/privacy-policy" // Assuming a generic privacy page exists or will be created
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Privacy Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/terms-of-service" // Assuming a generic terms page exists or will be created
                  className="text-grey-60 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Terms of Service
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
          
          {/* Social Media Column */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Follow Elon</h3>
             <div className="flex gap-4">
              <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="text-grey-60 hover:text-blue-600 transition-all p-2 rounded-full hover:bg-blue-50 hover:shadow-md">
                <span className="sr-only">Twitter / X</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Add other relevant social media if needed */}
            </div>
          </div>
        </div>
        
        {/* Removed Trust Indicators Section */}
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row w-full py-6 justify-between items-center border-t border-grey-20 text-grey-60 text-sm">
          <Text>
            © {new Date().getFullYear()} {STORE_NAME}. All rights reserved. This is an unofficial fan-made website.
          </Text>
          
          <p className="mt-2 md:mt-0 text-center md:text-right max-w-lg">
            Information on this site is for educational and informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
