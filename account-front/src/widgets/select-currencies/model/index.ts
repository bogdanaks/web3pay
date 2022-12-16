import React from "react"
import { mockNetworks } from "shared/mock"

interface useSelectCurrenciesProps {
  data: typeof mockNetworks
}

export const useSelectCurrencies = ({ data }: useSelectCurrenciesProps) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [visibleNetwork, setVisibleNetwork] = React.useState(data[0].slug)
  const [isCheckedNetwork, setIsCheckedNetwork] = React.useState<{
    [network: string]: boolean
  }>({})
  const [selectedCurrencies, setSelectedCurrencies] = React.useState<{
    [network: string]: string[]
  }>({})

  const onClickNetwork = (network: string): void => {
    setVisibleNetwork(network)
  }

  const checkCheckedNetwork = (network: string): boolean => {
    const isExist = network in isCheckedNetwork
    return isExist ? isCheckedNetwork[network] : false
  }

  const onClickSelectAllNetwork = (network: string): void => {
    const isExist = network in isCheckedNetwork

    if (isExist) {
      if (isCheckedNetwork[network]) {
        setIsCheckedNetwork((prevState) => ({
          ...prevState,
          [network]: false,
        }))
        setSelectedCurrencies((prevState) => ({
          ...prevState,
          [network]: [],
        }))
        return
      }

      setIsCheckedNetwork((prevState) => ({
        ...prevState,
        [network]: true,
      }))
      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [network]: data.find((n) => n.slug === network)?.currencies || [],
      }))
    }

    setIsCheckedNetwork((prevState) => ({
      ...prevState,
      [network]: true,
    }))
    setSelectedCurrencies((prevState) => ({
      ...prevState,
      [network]: data.find((n) => n.slug === network)?.currencies || [],
    }))
  }

  const showedCurrencies = React.useMemo(() => {
    return data.find((n) => n.slug === visibleNetwork)?.currencies || []
  }, [visibleNetwork])

  const onClickCurrency = (network: string, currency: string): void => {
    const isNetworkExists = network in selectedCurrencies
    const isAlreadyAdded =
      isNetworkExists && selectedCurrencies[network].includes(currency)

    if (!isNetworkExists) {
      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [network]: [currency],
      }))
      return
    }

    if (isAlreadyAdded) {
      setIsCheckedNetwork((prevState) => ({
        ...prevState,
        [network]: false,
      }))

      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [network]: [...prevState[network].filter((c) => c !== currency)],
      }))
      return
    }

    if (!isAlreadyAdded) {
      if (
        selectedCurrencies[network].length + 1 ===
        data.find((n) => n.slug === network)?.currencies.length
      ) {
        setIsCheckedNetwork((prevState) => ({
          ...prevState,
          [network]: true,
        }))
      }

      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [network]: prevState[network].concat(currency),
      }))
      return
    }
  }

  const checkCheckedCurrency = (network: string, currency: string): boolean => {
    const isAllChecked = isCheckedNetwork[network] || false
    if (isAllChecked) return true

    const isExistsCurrensies = network in selectedCurrencies

    if (!isExistsCurrensies) return false

    const isFindInSelectedCurrencies =
      selectedCurrencies[network].includes(currency)

    return isFindInSelectedCurrencies
  }

  console.log("isCheckedNetwork", isCheckedNetwork)
  console.log("selectedCurrencies", selectedCurrencies)

  return {
    isOpen,
    onClick: () => setIsOpen(!isOpen),
    visibleNetwork,
    onClickNetwork,
    checkCheckedNetwork,
    onClickSelectAllNetwork,
    showedCurrencies,
    onClickCurrency,
    checkCheckedCurrency,
  }
}
