import React from "react"
import { Body } from "shared/ui"

const DashboardPage = () => {
  return (
    <Body>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </Body>
  )
}

export default DashboardPage
