import React from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"
import { Switch } from "shared/ui"

export const CreateInvoiceFormPrice = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  const [isFixPrice, setIsFixPrice] = React.useState(true)
  const [priceFromValue, setPriceFromValue] = React.useState("")
  const [priceToValue, setPriceToValue] = React.useState("")

  const validatePrice = (e: any, field: "from" | "to") => {
    const value = String(e.target.value).replace(",", ".")
    const floatRegExp = /^[0-9]*[.,]?[0-9]{0,8}$/
    const isValidNum =
      !isNaN(Number.parseFloat(value)) && floatRegExp.test(value)

    if (field === "from") {
      isValidNum && setPriceFromValue(value)
      !value && setPriceFromValue("")
    }

    if (field === "to") {
      isValidNum && setPriceToValue(value)
      !value && setPriceToValue("")
    }
  }

  return (
    <div className="relative z-0 mb-6 w-full group flex flex-col">
      <label
        htmlFor="price_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Price USD
      </label>
      <Switch
        text="Fix price"
        size="small"
        checked={isFixPrice}
        onClick={() => setIsFixPrice(!isFixPrice)}
      />
      <div className="flex flex-row gap-5">
        {!isFixPrice && (
          <input
            {...register("price_input_from", {
              required: true,
              pattern: /^[0-9]*[.,]?[0-9]{0,8}$/,
              onChange: (e: any) => validatePrice(e, "from"),
            })}
            onChange={(e) => validatePrice(e, "from")}
            value={priceFromValue}
            type="text"
            id="price_input_from"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
            placeholder="Price from"
            required
          ></input>
        )}
        <input
          {...register("price_input_to", {
            required: true,
            pattern: /^[0-9]*[.,]?[0-9]{0,8}$/,
            onChange: (e: any) => validatePrice(e, "to"),
          })}
          onChange={(e) => validatePrice(e, "to")}
          value={priceToValue}
          type="text"
          id="price_input_to"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
          placeholder="Price to"
          required
        ></input>
      </div>
    </div>
  )
}
