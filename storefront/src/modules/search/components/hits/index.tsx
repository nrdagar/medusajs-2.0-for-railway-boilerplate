import { clx } from "@medusajs/ui"
import React from "react"
import {
  UseHitsProps,
  useHits,
  useSearchBox,
} from "react-instantsearch-hooks-web"

import Hit from "../hit"

type HitsProps = React.ComponentProps<"div"> & UseHitsProps

const Hits = ({
  className,
  ...props
}: HitsProps) => {
  const { query } = useSearchBox()
  const { hits } = useHits(props)

  return (
    <div
      className={clx(
        "transition-[height,max-height,opacity] duration-300 ease-in-out sm:overflow-hidden w-full sm:w-[50vw] mb-1 p-px",
        className,
        {
          "max-h-full opacity-100": !!query,
          "max-h-0 opacity-0": !query && !hits.length,
        }
      )}
    >
      <div
        className="grid grid-cols-1 gap-4 mb-4"
        data-testid="search-results"
      >
        {hits.slice(0, 6).map((hit, index) => (
          <li key={index} className="list-none">
            <Hit hit={hit} />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Hits
