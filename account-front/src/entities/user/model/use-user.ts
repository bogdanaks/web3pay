import useSWR from "swr"
import { getAuthToken } from "shared/lib/cookies-helper"
import { getUser } from "shared/api"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [authToken, setAuthToken] = useState("")
  const [isLoaded, setIsLoaded] = useState(true)

  const { data, error, isLoading, mutate } = useSWR(
    authToken ? "user" : null,
    getUser,
    {
      errorRetryCount: 3,
    }
  )

  useEffect(() => {
    const token = getAuthToken()
    setAuthToken(token)
    setIsLoaded(false)
  }, [])

  return {
    user: data,
    isError: error,
    isLoading: isLoaded || isLoading,
    mutate,
  }
}
