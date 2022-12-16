import Image from "next/image"
import React from "react"

interface NetworkSelectProps {
  image: string
  title: string
  onClick: () => void
  isActive: boolean
  isChecked: boolean
  onClickSelectAll: () => void
}

export const NetworkSelect = ({
  image,
  title,
  onClick,
  isActive,
  isChecked,
  onClickSelectAll,
}: NetworkSelectProps) => {
  return (
    <li
      className={`${
        isActive && "bg-gray-100"
      } w-full border-b border-gray-200 sm:border-b-0 sm:border-r`}
      onClick={onClick}
    >
      <div className="flex items-center pl-3">
        <input
          id={`${title}-checkbox-list`}
          type="checkbox"
          value=""
          checked={isChecked}
          onChange={onClickSelectAll}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
        />
        <div className="py-2 mx-2 w-full text-sm font-medium text-gray-900 flex flex-row items-center hover:cursor-pointer">
          <Image src={image} alt={title} width={20} height={20} />
          <span className="ml-2 text-base">{title}</span>
        </div>
      </div>
    </li>
  )
}
