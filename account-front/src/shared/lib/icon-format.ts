export const iconFormat = (iconUrl: string): string => {
  if (!iconUrl) return 'http://localhost:3000/assets/unknown-crypto.svg'

  if (iconUrl?.includes('ipfs')) {
    const url = iconUrl.split('ipfs://')[1]
    return `https://ipfs.infura.io/ipfs/${url}`
  }

  return iconUrl
}
