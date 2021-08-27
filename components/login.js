import Image from "next/image"
import React from "react"
import Button from "@material-tailwind/react/Button"
import { signIn } from "next-auth/client"

const login = () => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <Image
        className="cursor-pointer"
        src="/googleDocs.png"
        width={200}
        height={200}
      />
      <Button
        color="lightBlue"
        buttonType="filled"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        className="mt-4 ml-8"
        onClick={() => signIn()}
      >
        Login with Google
      </Button>
    </div>
  )
}

export default login
