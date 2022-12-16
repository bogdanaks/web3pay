import { useEffect, useState } from "react"

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: screenWidth, innerHeight: screenHeight } = window
    return {
      screenWidth,
      screenHeight,
    }
  } else {
    return {
      screenWidth: 0,
      screenHeight: 0,
    }
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (typeof window === undefined) return
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
