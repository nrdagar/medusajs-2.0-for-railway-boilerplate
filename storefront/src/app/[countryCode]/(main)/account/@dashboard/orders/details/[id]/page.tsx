import { Metadata } from "next"
import { notFound } from "next/navigation"

import OrderDetailsTemplate from "@modules/order/templates/order-details-template"
import { retrieveOrder } from "@lib/data/orders"
import { enrichLineItems } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const order = await retrieveOrder(id)

  if (!order) {
    return
  }

  const enrichedItems = await enrichLineItems(order.items, order.region_id!)

  return {
    ...order,
    items: enrichedItems,
  } as unknown as HttpTypes.StoreOrder
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const order = await getOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return {
    title: `Order #${order.display_id} | JBS Builder Lic`,
    description: `View details and status for your dumpster rental order #${order.display_id}`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `Order #${order.display_id} | JBS Builder Lic`,
      description: `View details and status for your dumpster rental order #${order.display_id}`,
      type: "website",
      robots: "noindex,nofollow"
    }
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const order = await getOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}
