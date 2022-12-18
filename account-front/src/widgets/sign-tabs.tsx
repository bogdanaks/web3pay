import classNames from "classnames"
import React from "react"

interface SignTabsProps {
  activeTab: string
  onSetActiveTab: React.Dispatch<React.SetStateAction<AuthType>>
}

export const SignTabs = ({ activeTab, onSetActiveTab }: SignTabsProps) => {
  const handleTabClick = (tabType: AuthType) => {
    onSetActiveTab(tabType)
    // setFavoriteSign(tabType)
  }

  return (
    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="flex mr-4" onClick={() => handleTabClick("wallet")}>
        <button
          className={classNames(
            "flex",
            "py-2",
            "px-3",
            "shadow-md",
            "rounded-md",
            "hover:bg-gray-100",
            "hover:text-blue-800",
            {
              "text-blue-600 shadow-blue-500/50": activeTab === "wallet",
            }
          )}
        >
          Wallet
        </button>
      </li>
      <li className="flex" onClick={() => handleTabClick("email")}>
        <button
          className={classNames(
            "flex",
            "py-2",
            "px-3",
            "shadow-md",
            "rounded-md",
            "hover:bg-gray-100",
            "hover:text-blue-800",
            {
              "text-blue-600 shadow-blue-500/50": activeTab === "email",
            }
          )}
        >
          Email
        </button>
      </li>
    </ul>
  )
}
