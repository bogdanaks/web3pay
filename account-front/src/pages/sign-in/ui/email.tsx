import Link from "next/link"
import React from "react"
import { Button } from "shared/ui"
import { useSignInEmail } from "../model/use-sign-in-email"

export const SignInEmail = () => {
  const { register, handleSubmit, onSubmit, serverError, buttonState } =
    useSignInEmail()

  return (
    <>
      <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="email_input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            {...register("email_input", {
              required: true,
            })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
            placeholder="name@mail.com"
            required
          ></input>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="password_input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            {...register("password_input", {
              required: true,
            })}
            type="password"
            id="password_input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-1 outline-transparent focus-visible:outline-blue-500 focus-visible:outline-1 block w-full p-2.5"
            placeholder=""
            required
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" state={buttonState} className="w-full">
            Sign In
          </Button>
        </div>
        {serverError && (
          <span className="flex items-center justify-center text-red-500 mt-2 m-auto text-center">
            {serverError}
          </span>
        )}
      </form>
      <div className="mt-4 flex flex-col items-center justify-center gap-2">
        <Link
          href="/sign-up"
          className="text-blue-600 px-2 hover:text-blue-900 text-sm"
        >
          Create an account
        </Link>
        <Link
          href="/reset-password"
          className="text-blue-600 px-2 hover:text-blue-900 text-sm"
        >
          Reset password
        </Link>
      </div>
    </>
  )
}
