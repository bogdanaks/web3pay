import React from "react"
import { Button, Input } from "shared/ui"
import { Body } from "shared/ui/body"

const InvoicesPage = () => {
  return (
    <Body>
      <div className="flex flex-row w-full gap-5">
        <Input placeholder="Search" type="text" />
        <Button className="w-40">Create invoice</Button>
      </div>
    </Body>
  )
}

export default InvoicesPage
