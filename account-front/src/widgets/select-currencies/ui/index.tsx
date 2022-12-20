import Image from "next/image"
import React from "react"
import { IoChevronDown } from "react-icons/io5"
import { useSelectCurrencies } from "../model"
import { NetworkSelect } from "./network-select"

interface SelectCurrenciesProps {
  title: string
  placeHolder: string
  data: NetworkWithCurrencies[]
}

export const SelectCurrencies = ({
  title,
  placeHolder,
  data,
}: SelectCurrenciesProps) => {
  const {
    isOpen,
    onClick,
    onClickNetwork,
    visibleNetwork,
    checkCheckedNetwork,
    onClickSelectAllNetwork,
    showedCurrencies,
    onClickCurrency,
    checkCheckedCurrency,
  } = useSelectCurrencies({
    data,
  })

  return (
    <div>
      <button
        onClick={onClick}
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        className="w-full h-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        type="button"
      >
        {title}
        <IoChevronDown size={16} className="ml-auto" />
      </button>
      <div
        id="dropdownSearch"
        className={`${
          isOpen ? "visible" : "hidden"
        } z-10 w-full bg-white rounded shadow`}
      >
        <div className="p-3 w-full">
          <label htmlFor="input-group-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder={placeHolder}
            />
          </div>
        </div>

        <ul className="mx-3 items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">
          {Object.values(
            data.map((network, index) => {
              return (
                <NetworkSelect
                  key={index}
                  image={network.img_url}
                  title={network.name}
                  onClick={() => onClickNetwork(network.ticker)}
                  isActive={visibleNetwork === network.ticker}
                  isChecked={checkCheckedNetwork(network.ticker)}
                  onClickSelectAll={() =>
                    onClickSelectAllNetwork(network.ticker)
                  }
                />
              )
            })
          )}
        </ul>

        <ul
          className="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 w-full"
          aria-labelledby="dropdownSearchButton"
        >
          {showedCurrencies.map((currency) => {
            return (
              <li
                key={`${visibleNetwork}_${currency.id}`}
                onClick={() => onClickCurrency(visibleNetwork, currency.id)}
              >
                <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
                    checked={checkCheckedCurrency(visibleNetwork, currency.id)}
                    readOnly={true}
                  />
                  {currency.img_url && (
                    <img
                      src={currency.img_url}
                      alt={currency.name}
                      width={20}
                      height={20}
                    />
                  )}
                  {!currency.img_url && (
                    <Image
                      src="/assets/unknown-crypto.svg"
                      alt={currency.name}
                      width={20}
                      height={20}
                    />
                  )}
                  <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer">
                    {currency.ticker}
                  </label>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
