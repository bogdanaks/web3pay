import useSWR from "swr"
import { getShop } from "shared/api"
import { useUser } from "entities/user/model/use-user"

export const useCurrency = () => {
  const { user } = useUser()
  const { data, error, isLoading, mutate } = useSWR(
    user ? "currency" : null,
    getShop,
    {
      errorRetryCount: 3,
    }
  )

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
