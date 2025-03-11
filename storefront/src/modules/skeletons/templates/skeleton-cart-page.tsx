import React from "react"

const SkeletonCartPage = () => {
  return (
    <div className="content-container">
      <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
        <div className="flex flex-col bg-white p-6 gap-y-6">
          <div className="w-48 h-8 bg-gray-200 animate-pulse"></div>
          <div className="flex flex-col gap-y-4">
            {Array.from(Array(3)).map((_, i) => (
              <div key={i} className="grid grid-cols-[122px_1fr] gap-x-4">
                <div className="w-full h-[143px] bg-gray-200 animate-pulse"></div>
                <div className="flex flex-col gap-y-2">
                  <div className="w-48 h-6 bg-gray-200 animate-pulse"></div>
                  <div className="w-24 h-4 bg-gray-200 animate-pulse"></div>
                  <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="bg-white p-6">
            <div className="flex flex-col gap-y-4">
              <div className="w-32 h-6 bg-gray-200 animate-pulse"></div>
              <div className="w-48 h-4 bg-gray-200 animate-pulse"></div>
              <div className="w-full h-[1px] bg-gray-200"></div>
              <div className="w-48 h-6 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
