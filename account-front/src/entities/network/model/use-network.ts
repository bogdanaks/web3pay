import useSWR from "swr"
import { getNetworks } from "shared/api"
import { useUser } from "entities/user/model/use-user"

export const useNetwork = () => {
  const { user } = useUser()
  const { data, error, isLoading, mutate } = useSWR(
    user ? "network" : null,
    getNetworks,
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
