import { useWallet } from "entities/wallet/model/use-wallet"
import React from "react"
import { useAuth } from "shared/hooks/use-auth"

export const useSignInWallet = () => {
  const [serverError, setServerError] = React.useState("")
  const {
    wallet,
    signer,
    connectMetaMask,
    connectCoinBase,
    connectWalletConnect,
  } = useWallet()
  const { signInWallet } = useAuth()

  const connect = async () => {
    if (!signer) return
    if (!wallet.address) return

    try {
      const nonce = Math.floor(Math.random() * 10000000).toString()
      const signature = await signer.signMessage(
        `Authorization WEB3PAY ${nonce}`
      )
      await signInWallet({
        address: wallet.address,
        signature,
        nonce,
      })
    } catch (err) {
      const error = err as Error
      setServerError(error.message)
    }
  }

  const connectMM = async () => {
    await connectMetaMask()
    connect()
  }

  const connectCB = async () => {
    await connectCoinBase()
    connect()
  }

  const connectWC = async () => {
    await connectWalletConnect()
    connect()
  }

  React.useEffect(() => {
    if (!serverError) return
    const timerError = setTimeout(() => {
      setServerError("")
    }, 2000)

    return () => {
      clearTimeout(timerError)
    }
  }, [serverError])

  return {
    serverError,
    connectMetaMask: connectMM,
    connectCoinBase: connectCB,
    connectWalletConnect: connectWC,
  }
}
