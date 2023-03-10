import { useNetworkWithCurrencies } from "entities/network/model/use-networks-with-currencies"
import React from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"
import { SelectCurrencies } from "widgets"

export const CreateInvoiceFormCurrencies = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  const { data } = useNetworkWithCurrencies()

  const onSet = (data: any) => {
    console.log("onSet data", data)
  }

  if (!data) return null

  return (
    <div className="relative z-0 mb-6 w-full group">
      <SelectCurrencies
        title="Select currencies"
        placeHolder="Search currency"
        data={data}
        onSet={onSet}
      />
      {/* <label
        htmlFor="currencies_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Currencies
      </label>
      <input
        {...register("currencies_input", {
          required: true,
        })}
        type="text"
        id="currencies_input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
        placeholder=""
        required
      ></input> */}
    </div>
  )
}
