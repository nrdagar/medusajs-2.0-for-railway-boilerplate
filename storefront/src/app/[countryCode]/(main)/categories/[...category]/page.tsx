import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCategoryByHandle, listCategories } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreProductCategory, StoreRegion } from "@medusajs/types"
import CategoryTemplate from "@modules/categories/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: { category: string[]; countryCode: string }
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
}

export async function generateStaticParams() {
  const product_categories = await listCategories()

  if (!product_categories) {
    return []
  }

  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
  )

  const categoryHandles = product_categories.map(
    (category: any) => category.handle
  )

  const staticParams = countryCodes
    ?.map((countryCode: string | undefined) =>
      categoryHandles.map((handle: any) => ({
        countryCode,
        category: [handle],
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { product_categories } = await getCategoryByHandle(
      params.category
    )

    const title = product_categories
      .map((category: StoreProductCategory) => category.name)
      .join(" | ")

    const description =
      product_categories[product_categories.length - 1].description ??
      `${title} category.`

    return {
      title: `${title} | JBS Builder Lic`,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/${params.category.join("/")}`,
      },
      openGraph: {
        title: `${title} | JBS Builder Lic`,
        description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/${params.category.join("/")}`,
        type: "website",
        locale: "en_US",
        siteName: "JBS Builder Lic",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/images/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: `${title} - Dumpster Rental Categories`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | JBS Builder Lic`,
        description,
        images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://jbsdumpster.com'}/images/og-image.jpg`],
      },
      keywords: [
        `${title.toLowerCase()} dumpster rental NYC`,
        `${title.toLowerCase()} waste management`,
        "construction dumpster categories",
        "dumpster rental services NYC",
        "waste container categories",
        "roll off dumpster types",
      ],
    }
  } catch (error) {
    notFound()
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams

  const { product_categories } = await getCategoryByHandle(
    params.category
  )

  if (!product_categories) {
    notFound()
  }

  return (
    <CategoryTemplate
      categories={product_categories}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
