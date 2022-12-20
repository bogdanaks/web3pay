import React from "react"

interface useSelectCurrenciesProps {
  data: NetworkWithCurrencies[]
}

export const useSelectCurrencies = ({ data }: useSelectCurrenciesProps) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [visibleNetwork, setVisibleNetwork] = React.useState(data[0].ticker)
  const [isCheckedNetwork, setIsCheckedNetwork] = React.useState<{
    [networkName: string]: boolean
  }>({})
  const [selectedCurrencies, setSelectedCurrencies] = React.useState<{
    [networkName: string]: string[]
  }>({})

  const onClickNetwork = (networkName: string): void => {
    setVisibleNetwork(networkName)
  }

  const checkCheckedNetwork = (networkName: string): boolean => {
    const isExist = networkName in isCheckedNetwork
    return isExist ? isCheckedNetwork[networkName] : false
  }

  const onClickSelectAllNetwork = (networkName: string): void => {
    const isExist = networkName in isCheckedNetwork

    if (isExist) {
      if (isCheckedNetwork[networkName]) {
        setIsCheckedNetwork((prevState) => ({
          ...prevState,
          [networkName]: false,
        }))
        setSelectedCurrencies((prevState) => ({
          ...prevState,
          [networkName]: [],
        }))
        return
      }

      setIsCheckedNetwork((prevState) => ({
        ...prevState,
        [networkName]: true,
      }))
      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [networkName]:
          data
            .find((n) => n.name === networkName)
            ?.currencies.map((currency) => currency.id) || [],
      }))
    }

    setIsCheckedNetwork((prevState) => ({
      ...prevState,
      [networkName]: true,
    }))
    setSelectedCurrencies((prevState) => ({
      ...prevState,
      [networkName]:
        data
          .find((n) => n.name === networkName)
          ?.currencies.map((currency) => currency.id) || [],
    }))
  }

  const showedCurrencies = React.useMemo(() => {
    return data.find((n) => n.ticker === visibleNetwork)?.currencies || []
  }, [data, visibleNetwork])

  const onClickCurrency = (networkName: string, currencyId: string): void => {
    const isNetworkExists = networkName in selectedCurrencies
    const isAlreadyAdded =
      isNetworkExists && selectedCurrencies[networkName].includes(currencyId)

    if (!isNetworkExists) {
      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [networkName]: [currencyId],
      }))
      return
    }

    if (isAlreadyAdded) {
      setIsCheckedNetwork((prevState) => ({
        ...prevState,
        [networkName]: false,
      }))

      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [networkName]: [
          ...prevState[networkName].filter((c) => c !== currencyId),
        ],
      }))
      return
    }

    if (!isAlreadyAdded) {
      if (
        selectedCurrencies[networkName].length + 1 ===
        data.find((n) => n.name === networkName)?.currencies.length
      ) {
        setIsCheckedNetwork((prevState) => ({
          ...prevState,
          [networkName]: true,
        }))
      }

      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [networkName]: prevState[networkName].concat(currencyId),
      }))
      return
    }
  }

  const checkCheckedCurrency = (
    networkName: string,
    currencyTicker: string
  ): boolean => {
    const isAllChecked = isCheckedNetwork[networkName] || false
    if (isAllChecked) return true

    const isExistsCurrensies = networkName in selectedCurrencies

    if (!isExistsCurrensies) return false

    const isFindInSelectedCurrencies =
      selectedCurrencies[networkName].includes(currencyTicker)

    return isFindInSelectedCurrencies
  }

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
