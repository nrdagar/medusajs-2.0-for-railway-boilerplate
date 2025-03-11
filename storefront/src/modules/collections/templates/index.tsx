import { Text } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"

export default function CollectionTemplate({
  collection,
  countryCode,
}: {
  collection: HttpTypes.StoreCollection
  countryCode: string
}) {
  return (
    <div className="py-6 content-container">
      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-2xl-semi">{collection.title}</h1>
        </div>
        <Text className="text-grey-60">This collection is currently unavailable.</Text>
      </div>
    </div>
  )
}
