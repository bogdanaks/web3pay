import React from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"
import { Select } from "shared/ui"

export const CreateInvoiceFormProducts = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <Select
        title="Select products (Optional)"
        placeHolder="Search products"
        items={[1, 2, 3]}
      />
      {/* <label
        htmlFor="products_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Products
      </label>
      <input
        {...register("products_input", {
          required: true,
        })}
        type="text"
        id="products_input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
        placeholder="Optional"
        required
      ></input> */}
    </div>
  )
}
