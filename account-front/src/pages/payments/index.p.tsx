import React from "react"
import { Layout } from "shared/ui"
import { Header, Sidebar } from "widgets"

const PaymentsPage = () => {
  return (
    <Layout>
      <Header />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="p-4">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PaymentsPage
