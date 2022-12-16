import React from "react"
import { Header, Sidebar } from "widgets"
import { Layout } from "./layout"

export const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="p-5 w-full">{children}</div>
      </div>
    </Layout>
  )
}
