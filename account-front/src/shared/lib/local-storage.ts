export function setIsWalletConnected(toggle: boolean): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("isWalletConnect", String(toggle))
  }
}

export function getIsWalletConnected(): boolean {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem("isWalletConnect")
    return value === "true"
  }

  return false
}

export function setWalletConnectedProvider(provider: string): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("isWalletConnectProvider", provider)
  }
}

export function getWalletConnectedProvider(): WalletProvider | null {
  if (typeof window !== "undefined") {
    const type = window.localStorage.getItem("isWalletConnectProvider")
    if (type) return type as WalletProvider
  }

  return null
}

export function setFavoriteSign(type: "web3" | "email"): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("favoriteSignIn", type)
  }
}

export function getFavoriteSign(): AuthType {
  if (typeof window !== "undefined") {
    const type = window.localStorage.getItem("favoriteSignIn") as AuthType
    if (type) return type
  }

  return "email"
}
