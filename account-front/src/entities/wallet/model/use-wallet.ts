import React from "react"
import { useAuth } from "shared/hooks/use-auth"
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useSigner,
} from "wagmi"

export const useWallet = () => {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const wallet = useAccount()
  const { data: balance } = useBalance({
    address: wallet.address,
  })
  const { data: signer } = useSigner()

  const connectMetaMask = async () => {
    // onChangeStep(2)
    // setState("CONNECTING")
    connect({ connector: connectors[0] })
  }

  const connectWalletConnect = async () => {
    // onChangeStep(2)
    // setState("CONNECTING")
    connect({ connector: connectors[1] })
  }

  const connectCoinBase = async () => {
    // onChangeStep(2)
    // setState("CONNECTING")
    connect({ connector: connectors[2] })
  }

  return {
    wallet,
    balance,
    signer,
    isConnect: wallet.isConnected,
    connectMetaMask,
    connectWalletConnect,
    connectCoinBase,
    disconnect,
  }
}
