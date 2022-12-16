import React from "react"
import { IoChevronDown } from "react-icons/io5"

interface SelectProductsProps {
  title: string
  placeHolder: string
  products: any[]
}

export const SelectProducts = ({
  title,
  placeHolder,
  products,
}: SelectProductsProps) => {
  const [isOpenItems, setIsOpenItems] = React.useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpenItems(!isOpenItems)}
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
          isOpenItems ? "visible" : "hidden"
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
        <ul
          className="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 w-full"
          aria-labelledby="dropdownSearchButton"
        >
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-11"
                type="checkbox"
                readOnly={true}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-11"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Bonnie Green
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-12"
                type="checkbox"
                readOnly={true}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-12"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Jese Leos
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-13"
                type="checkbox"
                readOnly={true}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-13"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Michael Gough
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-14"
                type="checkbox"
                readOnly={true}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-14"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Robert Wall
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-15"
                type="checkbox"
                readOnly={true}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-15"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Joseph Mcfall
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100">
              <input
                id="checkbox-item-16"
                type="checkbox"
                value=""
                readOnly={true}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-16"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Leslie Livingston
              </label>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex items-center p-2 rounded hover:bg-gray-100 hover:cursor-pointer">
              <input
                id="checkbox-item-17"
                type="checkbox"
                value=""
                readOnly={true}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
              />
              <label
                htmlFor="checkbox-item-17"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded hover:cursor-pointer"
              >
                Roberta Casas
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
