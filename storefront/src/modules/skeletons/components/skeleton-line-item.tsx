import { Table } from "@medusajs/ui"
import React from "react"

const SkeletonLineItem = () => {
  return (
    <Table.Row className="w-full">
      <Table.Cell className="!pl-0 p-4 w-24">
        <div className="flex w-16 h-16 bg-gray-200 animate-pulse"></div>
      </Table.Cell>
      <Table.Cell className="text-left">
        <div className="flex flex-col gap-y-2">
          <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 animate-pulse"></div>
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className="w-12 h-4 bg-gray-200 animate-pulse"></div>
      </Table.Cell>
      <Table.Cell>
        <div className="w-12 h-4 bg-gray-200 animate-pulse"></div>
      </Table.Cell>
    </Table.Row>
  )
}

export default SkeletonLineItem
