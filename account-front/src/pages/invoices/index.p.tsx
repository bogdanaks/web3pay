import { CreateInvoice } from "features/create-invoice/ui"
import React from "react"
import { Input } from "shared/ui"
import { Body } from "shared/ui/body"

const InvoicesPage = () => {
  return (
    <Body>
      <div className="flex flex-row w-full gap-5">
        <Input placeholder="Search" type="text" />
        <CreateInvoice />
      </div>
    </Body>
  )
}

export default InvoicesPage
