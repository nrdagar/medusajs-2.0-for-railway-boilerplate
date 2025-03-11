import React from "react"

const SkeletonOrderConfirmed = () => {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-6">
      <div className="content-container flex justify-center">
        <div className="max-w-4xl h-full bg-white w-full">
          <div className="flex flex-col gap-y-8 p-10">
            <div className="flex flex-col gap-y-2">
              <div className="w-64 h-8 bg-gray-200 animate-pulse"></div>
              <div className="w-48 h-6 bg-gray-200 animate-pulse"></div>
            </div>
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
        </div>
      </div>
    </div>
  )
}

export default SkeletonOrderConfirmed
