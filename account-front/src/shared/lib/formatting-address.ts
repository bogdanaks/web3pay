export const shortAddress = (address: string): string => {
  const leftSide = address.slice(0, 8)
  return leftSide
}

export const formattingAddress = (address: string) => {
  const first = address.slice(0, 5)
  const last = address.slice(-4)
  return `${first}...${last}`
}
