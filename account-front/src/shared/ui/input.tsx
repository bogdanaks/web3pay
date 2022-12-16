import { ElementState } from "app/enums"
import React, { InputHTMLAttributes } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<FieldValues>
  registerId?: string
  registerOpts?: any
  state?: ElementState
  variant?: "outlined" | "filled" | "standard"
  label?: string
}

export const Input = ({
  register,
  registerId,
  registerOpts,
  state = ElementState.normal,
  variant = "standard",
  label,
  ...props
}: InputProps) => {
  if (register && registerId) {
    return (
      <>
        {label && <label className="label">{label}</label>}
        <input
          // className={cn(styles.input, styles[variant], styles[state])}
          type="text"
          {...register(registerId, registerOpts)}
          {...props}
        />
      </>
    )
  }

  // <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>

  return (
    <>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        className="h-10 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        // className={cn(
        //   styles.input,
        //   styles[variant],
        //   { [styles.readOnly]: props.readOnly },
        //   styles[state]
        // )}
        type="text"
        {...props}
      />
    </>
  )
}
