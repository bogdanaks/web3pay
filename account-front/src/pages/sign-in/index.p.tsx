import React from "react"
import { Card, Wrapper } from "shared/ui"
import { SignTabs } from "widgets/sign-tabs"
import { SignInEmail } from "./ui/email"
import { SignInWallet } from "./ui/wallets"

const SignInNew = () => {
  const [activeTab, setActiveTab] = React.useState<AuthType>("wallet")

  return (
    <Wrapper>
      <Card>
        <h1 className="text-2xl text-center mb-5">
          Sign in to continue to WEB3PAY
        </h1>
        <SignTabs activeTab={activeTab} onSetActiveTab={setActiveTab} />
        {activeTab === "email" && <SignInEmail />}
        {activeTab === "wallet" && <SignInWallet />}
      </Card>
    </Wrapper>
  )
}

export default SignInNew
