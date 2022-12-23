import React from "react"

interface useSelectCurrenciesProps {
  data: NetworkWithCurrencies[]
  onSet: (data: any) => void
}

type SelectedCurrencies = { [networkId: string]: string[] | "all" | "neither" }

export const useSelectCurrencies = ({
  data,
  onSet,
}: useSelectCurrenciesProps) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const [selectedCurrencies, setSelectedCurrencies] =
    React.useState<SelectedCurrencies>({})
  const [visibleNetwork, setVisibleNetwork] = React.useState(data[0].id)

  const onClickNetwork = (networkId: string): void => {
    setVisibleNetwork(networkId)
  }

  const onClickSelectAllNetwork = (networkId: string): void => {
    const isArray =
      selectedCurrencies[networkId] !== "all" &&
      selectedCurrencies[networkId] !== "neither"
    const isAll = selectedCurrencies[networkId] === "all"
    const newStatus = !isAll && !isArray ? "all" : "neither"

    setSelectedCurrencies((prevState) => ({
      ...prevState,
      [networkId]: newStatus,
    }))
  }

  const onClickCurrency = (networkId: string, currencyId: string): void => {
    const isAll = selectedCurrencies[networkId] === "all"
    const isNeither = selectedCurrencies[networkId] === "neither"
    const isArray = !isAll && !isNeither
    const isAlreadyAdded = isArray
      ? selectedCurrencies[networkId].includes(currencyId)
      : false

    if (isAll) {
      const currencies =
        data.find((net) => net.id === networkId)?.currencies || []
      const newList = currencies
        .map((cur) => cur.id !== currencyId && cur.id)
        .filter(Boolean) as string[]

      setSelectedCurrencies((prevState) => ({
        ...prevState,
        [networkId]: newList,
      }))
      return
    }

    if (isAlreadyAdded) {
      setSelectedCurrencies((prevState) => {
        const prevStateNew: { [networkId: string]: string[] } = prevState as {
          [networkId: string]: string[]
        }
        const newListCurrencies = prevStateNew[networkId].filter(
          (cur) => cur !== currencyId
        )
        const newData = {
          ...prevStateNew,
          [networkId]: newListCurrencies.length ? newListCurrencies : "neither",
        } as SelectedCurrencies
        setSelectedCurrencies(newData)
        return prevState
      })
      return
    }

    if (!isAlreadyAdded && isArray) {
      setSelectedCurrencies((prevState) => {
        const newData = {
          ...prevState,
          [networkId]: prevState[networkId].concat(currencyId),
        } as SelectedCurrencies
        setSelectedCurrencies(newData)
        return prevState
      })
      return
    }

    setSelectedCurrencies((prevState) => ({
      ...prevState,
      [networkId]: [currencyId],
    }))
  }

  const checkCheckedCurrency = (
    networkId: string,
    currencyId: string
  ): boolean => {
    if (selectedCurrencies[networkId] === "all") return true
    if (selectedCurrencies[networkId] === "neither") return false

    const isFindInSelectedCurrencies =
      selectedCurrencies[networkId]?.includes(currencyId)

    return isFindInSelectedCurrencies
  }

  const checkCheckedNetwork = (networkId: string) => {
    if (!selectedCurrencies[networkId]) return false
    if (selectedCurrencies[networkId] === "all") return true
    if (selectedCurrencies[networkId] === "neither") return false
    if (selectedCurrencies[networkId].length) return true
    return false
  }

  const showedCurrencies = React.useMemo(() => {
    return data.find((n) => n.id === visibleNetwork)?.currencies || []
  }, [data, visibleNetwork])

  React.useEffect(() => {
    if (!data) return
    const serialize: SelectedCurrencies = {}
    data.forEach((network) => (serialize[network.id] = "all"))
    setSelectedCurrencies(serialize)
  }, [data])

  React.useEffect(() => {
    onSet(selectedCurrencies)
  }, [selectedCurrencies])

  return {
    isOpen,
    onClick: () => setIsOpen(!isOpen),
    visibleNetwork,
    onClickNetwork,
    selectedCurrencies,
    onClickSelectAllNetwork,
    showedCurrencies,
    onClickCurrency,
    checkCheckedCurrency,
    checkCheckedNetwork,
  }
}
