import useSWR from "swr"
import { getShop } from "shared/api"
import { useUser } from "entities/user/model/use-user"

export const useShop = () => {
  const { user } = useUser()
  const { data, error, isLoading, mutate } = useSWR(
    user ? "shop" : null,
    getShop,
    {
      errorRetryCount: 3,
    }
  )

  return {
    shop: data,
    isError: error,
    isLoading,
    mutate,
  }
}
