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
    <footer className="border-t border-ui-border-base bg-grey-5">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Company Info Column */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-grey-90 hover:text-orange-600 uppercase mb-6"
            >
              {STORE_NAME}
            </LocalizedClientLink>
            
            <p className="text-grey-60 mb-6 text-sm">
              Professional dumpster rental services in NYC. Fast, reliable, and convenient waste management solutions.
            </p>
            
            <div className="flex items-center mb-4 transform hover:translate-x-2 transition-transform">
              <span className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </span>
              <a href="tel:5165151951" className="text-grey-70 hover:text-orange-600 font-semibold transition-colors">
                (516) 515-1951
              </a>
            </div>
            
            <div className="flex items-start mb-6 transform hover:translate-x-2 transition-transform">
              <span className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </span>
              <address className="text-grey-70 not-italic font-medium text-sm">
                87-40 121 street<br />
                Richmond Hill, NY 11418
              </address>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Services</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <LocalizedClientLink
                  href="/services/residential"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Residential Dumpsters
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/services/construction"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Construction Dumpsters
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/services/commercial"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Commercial Dumpsters
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/services/demolition"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Demolition Dumpsters
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
          
          {/* Service Areas Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Service Areas</h3>
            <ul className="grid grid-cols-1 gap-3">
              {Object.values(CITIES).map((city) => (
                <li key={city.id}>
                  <LocalizedClientLink
                    href={`/service-area/${city.slug}`}
                    className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                  >
                    {city.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <LocalizedClientLink
                  href="/about-us"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  About Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/contact-us"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Contact Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/faqs"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  FAQs
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/privacy-policy"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Privacy Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/terms-of-service"
                  className="text-grey-60 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Terms of Service
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Form Column */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-grey-90 mb-4 uppercase">Contact Us</h3>
            <p className="text-grey-60 mb-4 text-sm">
              Have questions? Send us a message and we'll get back to you shortly.
            </p>
            <LocalizedClientLink
              href="/contact-us"
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium text-center transition-all transform hover:translate-y-[-2px] shadow-md"
            >
              Get in Touch
            </LocalizedClientLink>
          </div>
        </div>
        
        {/* Trust Indicators Section */}
        <div className="border-t border-grey-20 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <span className="bg-green-100 text-green-600 p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="text-grey-60 text-base font-semibold">Licensed &amp; Insured</span>
              
              <span className="bg-green-100 text-green-600 p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="text-grey-60 text-base font-semibold">Same-Day Delivery</span>
              
              <span className="bg-green-100 text-green-600 p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="text-grey-60 text-base font-semibold">Satisfaction Guaranteed</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-grey-60 hover:text-orange-600 transition-all p-3 rounded-full hover:bg-orange-50 hover:shadow-md">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-grey-60 hover:text-orange-600 transition-all p-3 rounded-full hover:bg-orange-50 hover:shadow-md">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-grey-60 hover:text-orange-600 transition-all p-3 rounded-full hover:bg-orange-50 hover:shadow-md">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8z"/>
                  <circle cx="12" cy="12" r="3"/>
                  <circle cx="16.5" cy="7.5" r=".75"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row w-full py-6 justify-between items-center border-t border-grey-20 text-grey-60 text-sm">
          <Text>
            © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
          </Text>
          
          <p className="mt-2 md:mt-0 text-center md:text-right max-w-lg">
            We provide professional dumpster rental services in NYC with fast delivery and excellent customer service.
          </p>
        </div>
      </div>
    </footer>
  )
}
