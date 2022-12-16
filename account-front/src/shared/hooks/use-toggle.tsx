import React, { useState } from "react"

export const useToggle = (defaultToggle = false) => {
  const [toggle, setToggle] = useState(defaultToggle)

  return {
    toggle,
    setToggle,
  }
}
