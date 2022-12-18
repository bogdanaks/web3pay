import React from "react"
import { Card } from "shared/ui"
import { SignTabs } from "widgets/sign-tabs"
import { SignInEmail } from "./ui/email"
import { SignInWallet } from "./ui/wallets"

const SignInNew = () => {
  const [activeTab, setActiveTab] = React.useState<AuthType>("wallet")

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full relative">
      <Card className="max-h-full items-center justify-center max-w-440px w-full h-full mobileM:max-h-440px">
        <h1 className="text-2xl text-center mb-5">
          Sign in to continue to WEB3PAY
        </h1>
        <SignTabs activeTab={activeTab} onSetActiveTab={setActiveTab} />
        {activeTab === "email" && <SignInEmail />}
        {activeTab === "wallet" && <SignInWallet />}
      </Card>
    </div>
  )
}

export default SignInNew
