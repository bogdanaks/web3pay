import useSWR from "swr"
import { getNetworksWithCurrencies } from "shared/api"
import { useUser } from "entities/user/model/use-user"

export const useNetworkWithCurrencies = () => {
  const { user } = useUser()

  const { data, error, isLoading, mutate } = useSWR(
    user ? "network_with_currencies" : null,
    getNetworksWithCurrencies,
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
