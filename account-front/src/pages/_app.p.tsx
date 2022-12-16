import { AuthWrapper } from "app/auth-wrapper"
import type { AppProps } from "next/app"
import { WagmiConfig, createClient, configureChains } from "wagmi"

import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"
import { polygon, hardhat } from "wagmi/chains"

import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"
import { InjectedConnector } from "wagmi/connectors/injected"

import "/styles/globals.css"

const { chains, provider } = configureChains(
  [polygon, hardhat],
  [
    infuraProvider({
      apiKey: "0cf237477c8749e9812d09fbd016b502",
    }),
    publicProvider(),
  ]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "web3pay",
      },
    }),
    new InjectedConnector({
      chains: [hardhat],
    }),
  ],
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </WagmiConfig>
  )
}

export default MyApp
