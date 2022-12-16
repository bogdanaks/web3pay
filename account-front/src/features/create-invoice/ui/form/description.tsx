import React from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

export const CreateInvoiceFormDescription = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <label
        htmlFor="description_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Order description
      </label>
      <textarea
        {...register("description_input", {
          required: false,
        })}
        id="description_input"
        rows={4}
        className="resize-none h-36 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Optional"
      ></textarea>
    </div>
  )
}
