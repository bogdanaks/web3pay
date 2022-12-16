import Image from "next/image"
import React from "react"
//@ts-ignore
import Jdenticon from "react-jdenticon"

import { useAuth } from "shared/hooks/use-auth"
import { useUser } from "entities/user/model/use-user"
import { useShop } from "entities/shop/model/use-shop"
import { useWallet } from "entities/wallet/model/use-wallet"
import { shortAddress } from "shared/lib/formatting-address"
import useOnClickOutside from "shared/hooks/use-on-click-outside"

export const Header = () => {
  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState(false)
  const { signOut, authType } = useAuth()
  const { user } = useUser()
  const { shop } = useShop()
  const { wallet } = useWallet()

  const menuRef = React.useRef(null)
  const profileRef = React.useRef(null)
  useOnClickOutside({
    refBlock: menuRef,
    refIgnore: profileRef,
    handler: () => setIsOpenUserMenu(false),
  })

  const userName =
    authType === "email" ? user?.email : shortAddress(wallet.address || "")

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 drop-shadow-sm">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          WEB3PAY
        </span>
        <div className="flex items-center md:order-2" ref={profileRef}>
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
          >
            <span className="sr-only">Open user menu</span>
            <Jdenticon size="30" value={userName} />
          </button>
          <div
            ref={menuRef}
            className={`${
              !isOpenUserMenu && "hidden"
            } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow`}
            id="user-dropdown"
            style={{
              position: "absolute",
              right: "15px",
              top: "45px",
            }}
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900">
                {shop?.company}
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate">
                {userName}
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  className="hover:cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => signOut()}
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
