import React, { HTMLAttributes } from "react"
import cn from "classnames"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col p-4 shadow-lg rounded-lg`}
    >
      {children}
    </div>
  )
}
