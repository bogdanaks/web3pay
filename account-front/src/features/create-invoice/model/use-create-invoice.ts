import React from "react"
import { FieldValues, useForm } from "react-hook-form"

export const useCreateInvoice = () => {
  const [isVisibleCreate, setIsVisibleCreate] = React.useState(false)
  const [buttonState, setButtonState] = React.useState<ElementState>("normal")

  const { register, handleSubmit } = useForm()

  const onCreate = () => {
    console.log("create invoice")
  }

  const onButtonClick = () => {
    setIsVisibleCreate(true)
  }

  const onSubmit = async (data: FieldValues) => {
    // try {
    //   setButtonState(ElementState.processing)
    //   await signInEmail({
    //     email: data.email_input,
    //     password: data.password_input,
    //   })
    //   setButtonState(ElementState.normal)
    // } catch (err) {
    //   const error = err as Error
    //   setServerError(error.message)
    //   setButtonState(ElementState.disabled)
    // }
  }

  return {
    onCreate,
    isVisibleCreate,
    onButtonClick,
    hideCreateWindow: () => setIsVisibleCreate(false),
    register,
    handleSubmit,
    onSubmit,
    buttonState,
  }
}
