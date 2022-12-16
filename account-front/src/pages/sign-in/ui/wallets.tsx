import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useSignInWallet } from "../model/use-sign-in-wallet"

export const SignInWallet = () => {
  const {
    connectMetaMask,
    connectCoinBase,
    connectWalletConnect,
    serverError,
  } = useSignInWallet()

  return (
    <div className="flex flex-wrap flex-col mt-6 h-full items-center justify-between">
      <ul className="flex flex-wrap items-center justify-center gap-4 mb-4">
        <li
          onClick={connectMetaMask}
          className="hover:cursor-pointer hover:border-blue-500 flex flex-col items-center justify-center border-2 border-gray-100 p-2 rounded-lg"
        >
          <Image
            src="/assets/icon-wallets/metamask.svg"
            alt="metamask"
            width={50}
            height={50}
          />
          <span className="text-sm mt-1">Metamask</span>
        </li>
        <li
          onClick={connectWalletConnect}
          className="hover:cursor-pointer hover:border-blue-500 flex flex-col items-center justify-center border-2 border-gray-100 p-2 rounded-lg"
        >
          <Image
            src="/assets/icon-wallets/walletconnect.svg"
            alt="walletconnect"
            width={50}
            height={50}
          />
          <span className="text-sm mt-1">WalletConnect</span>
        </li>
        <li
          onClick={connectCoinBase}
          className="hover:cursor-pointer hover:border-blue-500 flex flex-col items-center justify-center border-2 border-gray-100 p-2 rounded-lg"
        >
          <Image
            src="/assets/icon-wallets/coinbase.svg"
            alt="coinbase"
            width={50}
            height={50}
          />
          <span className="text-sm mt-1">Coinbase</span>
        </li>
      </ul>
      {serverError && (
        <span className="flex items-center justify-center text-red-500 mb-2 m-auto text-center">
          {serverError}
        </span>
      )}
      <Link
        href="/sign-up"
        className="text-blue-600 px-2 hover:text-blue-900 text-sm"
      >
        Sign Up
      </Link>
      <Link
        href="/help/how-to-create-wallet"
        className="text-blue-600 px-2 hover:text-blue-900 text-sm"
      >
        How to create wallet
      </Link>
    </div>
  )
}
