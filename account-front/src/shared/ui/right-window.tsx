import React from "react"
import { VscClose } from "react-icons/vsc"

import useOnClickOutside from "shared/hooks/use-on-click-outside"

interface RightWindowProps {
  children: React.ReactNode
  isVisible: boolean
  title: string
  onHide: () => void
}

export const RightWindow = ({
  isVisible,
  title,
  onHide,
  children,
}: RightWindowProps) => {
  const windowRef = React.useRef(null)

  useOnClickOutside({ refBlock: windowRef, handler: onHide })

  if (!isVisible) return null

  return (
    <div
      className="right-0 w-124 p-5 transition-all ease-in top-0 fixed h-full bg-white shadow-lg overflow-x-auto z-10"
      ref={windowRef}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg">{title}</h2>
        <button onClick={onHide}>
          <VscClose fontSize={24} />
        </button>
      </div>
      {children}
    </div>
  )
}
