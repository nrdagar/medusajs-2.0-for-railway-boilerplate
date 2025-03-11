import { Metadata } from "next"

import SearchResultsTemplate from "@modules/search/templates/search-results-template"

import { search } from "@modules/search/actions"

export const metadata: Metadata = {
  title: "Search Results | JBS Builder Lic",
  description: "Search results for dumpster rental services in NYC.",
  robots: {
    index: false,
    follow: false,
  }
}

type Params = {
  params: { query: string; countryCode: string }
  searchParams: {
    page?: string
  }
}

export default async function SearchResults({ params, searchParams }: Params) {
  const { query } = params
  const { sortBy, page } = searchParams

  const hits = await search(query).then((data) => data)

  const ids = hits
    .map((h) => h.objectID || h.id)
    .filter((id): id is string => {
      return typeof id === "string"
    })

  return (
    <SearchResultsTemplate
      query={query}
      countryCode={params.countryCode}
    />
  )
}
