import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SearchResultsTemplateProps = {
  query: string
  countryCode: string
}

const SearchResultsTemplate = ({
  query,
  countryCode,
}: SearchResultsTemplateProps) => {
  return (
    <>
      <div className="flex justify-between border-b w-full py-6 px-8 small:px-14 items-center">
        <div className="flex flex-col items-start">
          <Text className="text-ui-fg-muted">Search Results for:</Text>
          <Heading>{decodeURI(query)}</Heading>
        </div>
        <LocalizedClientLink
          href="/"
          className="txt-medium text-ui-fg-subtle hover:text-ui-fg-base"
        >
          Clear
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col small:flex-row small:items-start p-6">
        <Text className="ml-8 small:ml-14 mt-3">Search functionality has been temporarily disabled.</Text>
      </div>
    </>
  )
}

export default SearchResultsTemplate
