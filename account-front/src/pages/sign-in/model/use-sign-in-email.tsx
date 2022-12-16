import { ElementState } from "app/enums"
import React from "react"
import { FieldValues, useForm } from "react-hook-form"

import { useAuth } from "shared/hooks/use-auth"

export const useSignInEmail = () => {
  const { register, handleSubmit } = useForm()
  const [serverError, setServerError] = React.useState("")
  const [buttonState, setButtonState] = React.useState(ElementState.normal)
  const { signInEmail } = useAuth()

  const onSubmit = async (data: FieldValues) => {
    try {
      setButtonState(ElementState.processing)
      await signInEmail({
        email: data.email_input,
        password: data.password_input,
      })
      setButtonState(ElementState.normal)
    } catch (err) {
      const error = err as Error

      setServerError(error.message)
      setButtonState(ElementState.disabled)
    }
  }

  React.useEffect(() => {
    if (!serverError) return
    const timerError = setTimeout(() => {
      setServerError("")
      setButtonState(ElementState.normal)
    }, 2000)

    return () => {
      clearTimeout(timerError)
    }
  }, [serverError])

  return {
    onSubmit,
    register,
    handleSubmit,
    serverError,
    buttonState,
  }
}
