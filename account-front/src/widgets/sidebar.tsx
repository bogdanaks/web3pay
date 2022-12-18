import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import {
  IoBagOutline,
  IoBarChartOutline,
  IoSettingsOutline,
} from "react-icons/io5"

export const Sidebar = () => {
  const router = useRouter()
  const [isOpenDropdown, setIsOpenDropDown] = React.useState({
    ecommerce: true,
  })

  const handleDropDownClick = (type: keyof typeof isOpenDropdown) => {
    setIsOpenDropDown((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }))
  }

  return (
    <aside
      className="w-64 h-[calc(screen - 72px)] border-r-2 border-gray-50 flex shrink-0"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 w-full">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`${
                router.asPath === "/dashboard" && "bg-gray-100"
              } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}
            >
              <IoBarChartOutline size={20} color="rgb(71, 74, 82)" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => handleDropDownClick("ecommerce")}
            >
              <IoBagOutline size={20} color="rgb(71, 74, 82)" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                E-commerce
              </span>
              <svg
                className={`w-6 h-6 transition-all ease-in ${
                  isOpenDropdown["ecommerce"] && "rotate-180"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${
                !isOpenDropdown["ecommerce"] && "hidden"
              }`}
            >
              <li>
                <Link
                  href="/products"
                  className={`${
                    router.asPath === "/products" && "bg-gray-100"
                  } flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/billing"
                  className={`${
                    router.asPath === "/billing" && "bg-gray-100"
                  } flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100`}
                >
                  Billing
                </Link>
              </li>
              <li>
                <Link
                  href="/invoices"
                  className={`${
                    router.asPath === "/invoices" && "bg-gray-100"
                  } flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100`}
                >
                  Invoices
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className={`${
                    router.asPath === "/payments" && "bg-gray-100"
                  } flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100`}
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/subscriptions"
                  className={`${
                    router.asPath === "/subscriptions" && "bg-gray-100"
                  } flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100`}
                >
                  Subscriptions
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/shop-settings"
              className={`${
                router.asPath === "/shop-settings" && "bg-gray-100"
              } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}
            >
              <IoSettingsOutline size={20} color="rgb(71, 74, 82)" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Shop Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
