import React from "react"
import { Button, RightWindow } from "shared/ui"
import { useCreateInvoice } from "../model/use-create-invoice"
import {
  CreateInvoiceFormCurrencies,
  CreateInvoiceFormDescription,
  CreateInvoiceFormProducts,
  CreateInvoiceFormOrderId,
  CreateInvoiceFormPrice,
} from "./form"

export const CreateInvoice = () => {
  const {
    isVisibleCreate,
    onButtonClick,
    hideCreateWindow,
    register,
    handleSubmit,
    onSubmit,
    buttonState,
  } = useCreateInvoice()

  return (
    <>
      <Button onClick={onButtonClick}>Create invoice</Button>
      <RightWindow
        onHide={hideCreateWindow}
        title="Create new invoice"
        isVisible={isVisibleCreate}
      >
        <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <CreateInvoiceFormCurrencies register={register} />
          <CreateInvoiceFormPrice register={register} />
          <CreateInvoiceFormProducts register={register} />
          <CreateInvoiceFormOrderId register={register} />
          <CreateInvoiceFormDescription register={register} />
          <div className="flex flex-row items-center justify-between gap-20 w-full">
            <Button
              type="submit"
              state={buttonState}
              className="w-auto bg-gray-400"
            >
              Save as draft
            </Button>
            <Button type="submit" state={buttonState} className="w-auto">
              Create invoice
            </Button>
          </div>
          {/* {serverError && (
            <span className="flex items-center justify-center text-red-500 mt-2 m-auto text-center">
              {serverError}
            </span>
          )} */}
        </form>
      </RightWindow>
    </>
  )
}
