import React from "react"
import Router from "next/router"
import { useUser } from "entities/user/model/use-user"
import config from "shared/config"
import { signInByEmail, signInByWeb3 } from "shared/api"
import { delAuthToken, setAuthToken } from "shared/lib/cookies-helper"

export const useAuth = () => {
  const { user, isLoading, mutate } = useUser()
  const [authType, setAuthType] = React.useState<AuthType | null>(null)

  React.useEffect(() => {
    if (isLoading) return
    const isPublicRoute = !!config.PUBLIC_ROUTES.find(
      (route) => route === Router.asPath
    )

    if (user && isPublicRoute) {
      Router.push("/dashboard")
      return
    }

    if (!user && !isPublicRoute) {
      Router.push("/sign-in")
    }
  }, [user, isLoading, Router])

  const signIn = async (token: string | undefined) => {}

  const signInEmail = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const token = await signInByEmail({ email, password })
    if (!token) return
    setAuthToken(token)
    setAuthType("email")
    Router.push("/dashboard")
  }

  const signInWallet = async ({
    address,
    signature,
    nonce,
  }: {
    address: string
    signature: string
    nonce: string
  }) => {
    const token = await signInByWeb3({ address, signature, nonce })
    if (!token) return
    setAuthToken(token)
    setAuthType("wallet")
    Router.push("/dashboard")
  }

  const signOut = () => {
    delAuthToken()
    mutate()
    Router.push("/sign-in")
  }

  return {
    isAuth: !!user,
    isLoading,
    authType,
    signInEmail,
    signInWallet,
    signOut,
  }
}
