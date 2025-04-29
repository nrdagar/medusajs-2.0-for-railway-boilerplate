import { Suspense } from "react"
import { STORE_NAME } from "@lib/constants"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base shadow-md">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
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
              <LocalizedClientLink
                className="text-grey-60 hover:text-blue-600 font-medium transition-colors"
                href="/about-us"
              >
                Biography
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-grey-60 hover:text-blue-600 font-medium transition-colors"
                href="/elon-companies"
              >
                Companies
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-grey-60 hover:text-blue-600 font-medium transition-colors"
                href="/elon-timeline"
              >
                Timeline
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-grey-60 hover:text-blue-600 font-medium transition-colors"
                href="/elon-gallery"
              >
                Gallery
              </LocalizedClientLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
