import React from "react"
import { useAuth } from "shared/hooks/use-auth"
import { Loader, Wrapper } from "shared/ui"

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )
  }

  return <>{children}</>
}
