import { notFound } from "next/navigation"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  categories,
  countryCode,
}: {
  categories: HttpTypes.StoreProductCategory[]
  countryCode: string
}) {
  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <div className="py-6 content-container" data-testid="category-container">
      <div className="w-full">
        <div className="flex flex-row mb-8 text-2xl-semi gap-4">
          {parents &&
            parents.map((parent) => (
              <span key={parent.id} className="text-ui-fg-subtle">
                <LocalizedClientLink
                  className="mr-4 hover:text-orange-600"
                  href={`/categories/${parent.handle}`}
                >
                  {parent.name}
                </LocalizedClientLink>
                /
              </span>
            ))}
          <h1>{category.name}</h1>
        </div>
        {category.description && (
          <div className="mb-8">
            <Text className="text-grey-60">{category.description}</Text>
          </div>
        )}
        <Text className="text-grey-60">This category is currently unavailable.</Text>
      </div>
    </div>
  )
}
