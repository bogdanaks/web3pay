import WalletConnectProvider from '@walletconnect/web3-provider'

class WalletConnectRepository {
  provider: WalletConnectProvider | undefined

  constructor() {
    this.provider = this.initProvider()
  }

  getProvider(): WalletConnectProvider | undefined {
    return this.provider
  }

  resetProvider(): void {
    if (this.provider && this.provider.wc?.uri) {
      this.initProvider()
    }
  }

  initProvider(): WalletConnectProvider {
    this.provider = new WalletConnectProvider({
      rpc: {
        1: 'https://mainnet.infura.io/v3/5e38ed450b044233a99bdd1e464a4976',
        56: 'https://bsc-dataseed.binance.org/',
        137: 'https://polygon-rpc.com/',
      },
    })

    return this.provider
  }

  async enable(): Promise<void> {
    if (!this.provider) return
    await this.provider.enable()
  }

  changeChainId(chainId: number) {
    if (!this.provider) return
    this.provider.chainId = chainId
  }
}

export default new WalletConnectRepository()
