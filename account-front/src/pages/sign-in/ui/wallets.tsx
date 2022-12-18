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
    <div className="grid grid-cols-1 grid-rows-[1fr_20px] gap-4 mt-6 h-auto items-center justify-center mobileM:h-full">
      <ul className="grid grid-cols-1 grid-rows-16 auto-cols-fr grid-flow-row gap-4 w-full h-full mobileM:grid-flow-col mobileM:grid-rows-[1fr]">
        <li
          onClick={connectMetaMask}
          className="mobileM:h-40 my-auto hover:cursor-pointer hover:shadow-blue-500/50 flex flex-col items-center justify-center shadow-around p-2 px-3 rounded-lg"
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
          className="mobileM:h-40 my-auto hover:cursor-pointer hover:shadow-blue-500/50 flex flex-col items-center justify-center shadow-around p-2 px-3 rounded-lg"
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
          className="mobileM:h-40 my-auto hover:cursor-pointer hover:shadow-blue-500/50 flex flex-col items-center justify-center shadow-around p-2 px-3 rounded-lg"
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
        <span className="flex items-center justify-center text-red-500 text-center">
          {serverError}
        </span>
      )}
      <div className="flex flex-row items-center justify-between w-full gap-2 mt-auto">
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
    </div>
  )
}
