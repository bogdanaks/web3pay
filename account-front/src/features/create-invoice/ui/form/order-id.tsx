import React from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

export const CreateInvoiceFormOrderId = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <label
        htmlFor="order_id_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Order ID
      </label>
      <input
        {...register("order_id_input", {
          required: false,
        })}
        type="text"
        id="order_id_input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
        placeholder="Optional"
      ></input>
    </div>
  )
}
