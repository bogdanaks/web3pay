interface EthereumProvider {
  isMetaMask?: boolean;
}

export declare global {
  interface Window {
    ethereum: EthereumProvider;
  }
}
