import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { VscError, VscLoading } from "react-icons/vsc"
import { ElementState } from "app/enums"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children: ReactNode
  type?: "button" | "submit" | "reset"
  refEl?: React.ForwardedRef<any>
  state?: ElementState
}

const buttonConfig = {
  stateBtn: {
    normal: "cursor-pointer opacity-100 hover:bg-blue-800",
    processing: "cursor-progress opacity-100",
    success: "cursor-default opacity-100 bg-green-500 hover:bg-green-600",
    failure: "cursor-default bg-red-200",
    disabled: "cursor-disabled opacity-60 bg-gray-300",
  },
}

export const Button = ({
  onClick,
  children,
  type = "button",
  refEl,
  state = ElementState.normal,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      ref={refEl}
      type={type}
      className={`${props.className} shrink-0 flex flex-row items-center justify-center h-10 text-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 ${buttonConfig.stateBtn[state]}`}
      onClick={onClick}
      disabled={
        state === ElementState.disabled || state === ElementState.failure
      }
    >
      {children}
      {state === ElementState.processing && (
        <div className="ml-4 animate-spin">
          <VscLoading fontSize={20} />
        </div>
      )}
      {state === ElementState.failure && (
        <div className="ml-4">
          <VscError fontSize={20} />
        </div>
      )}
    </button>
  )
}
