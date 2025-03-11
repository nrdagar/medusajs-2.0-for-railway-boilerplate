import React from "react"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hit = ({ hit }: any) => {
  return (
    <LocalizedClientLink
      href={`/service-area/${hit.slug}`}
      className={clx(
        "grid grid-cols-[122px_1fr] gap-x-4 p-4 transition-all hover:bg-ui-bg-base-hover"
      )}
    >
      <div className="flex flex-col gap-y-2">
        <span className="text-base-regular">{hit.name}</span>
        <span className="text-small-regular text-ui-fg-subtle">
          Service Area
        </span>
      </div>
    </LocalizedClientLink>
  )
}

export default Hit
