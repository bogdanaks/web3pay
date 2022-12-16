import React from "react"
import { VscClose } from "react-icons/vsc"
import useOnClickOutside from "shared/hooks/use-on-click-outside"
import { Button } from "shared/ui"
import { useCreateInvoice } from "../model/use-create-invoice"
import {
  CreateInvoiceFormCurrencies,
  CreateInvoiceFormDescription,
  CreateInvoiceFormProducts,
  CreateInvoiceFormOrderId,
  CreateInvoiceFormPrice,
} from "./form"

export const CreateInvoice = () => {
  const windowRef = React.useRef(null)
  const {
    isVisibleCreate,
    onButtonClick,
    hideCreateWindow,
    register,
    handleSubmit,
    onSubmit,
    buttonState,
  } = useCreateInvoice()
  useOnClickOutside({ refBlock: windowRef, handler: hideCreateWindow })

  return (
    <>
      <Button onClick={onButtonClick}>Create invoice</Button>
      <div
        ref={windowRef}
        className={`${
          isVisibleCreate ? "right-0" : "-right-124"
        } w-124 p-5 transition-all ease-in top-0 fixed h-full bg-white shadow-lg overflow-x-auto`}
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg">Create new invoice</h2>
          <button onClick={hideCreateWindow}>
            <VscClose fontSize={24} />
          </button>
        </div>
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
      </div>
    </>
  )
}
