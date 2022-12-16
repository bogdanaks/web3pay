import React from "react"

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-5">
      {children}
    </div>
  )
}
