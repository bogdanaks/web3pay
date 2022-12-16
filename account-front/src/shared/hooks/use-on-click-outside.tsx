import React from "react"

interface useOnClickOutsideProps {
  refBlock: React.MutableRefObject<any>
  refIgnore?: React.MutableRefObject<any>
  handler: (event: any) => void
}

const useOnClickOutside = ({
  refBlock,
  refIgnore,
  handler,
}: useOnClickOutsideProps) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (refIgnore) {
        if (
          refBlock.current &&
          !refBlock.current.contains(event.target) &&
          !refIgnore.current.contains(event.target)
        ) {
          handler(event)
        }
      } else {
        if (refBlock.current && !refBlock.current.contains(event.target)) {
          handler(event)
        }
      }
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [refBlock, refIgnore, handler])
}

export default useOnClickOutside
