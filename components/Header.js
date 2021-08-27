import React from "react"
import Image from "next/image"
import Button from "@material-tailwind/react/Button"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import { signIn, signOut, useSession } from "next-auth/client"
import Link from "next/link"

const Header = () => {
  const [session] = useSession()
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between">
      <div className="flex items-center ml-4">
        <div className="cursor-pointer w-10 h-10 flex items-center rounded-full justify-center hover:bg-gray-300">
          <MenuIcon />
        </div>
        <Link href="/">
          <Image
            src="/GoogleDocs.png"
            className="cursor-pointer"
            width={50}
            height={50}
          />
        </Link>
        <p className="text-semibold">Docs</p>
      </div>
      <div className="hidden lg:flex lg:flex-grow h-10 items-center bg-gray-100 ml-10 mr-32 p-4 rounded">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 outline-none bg-transparent ml-2"
        />
      </div>

      <div className="flex items-center mr-4">
        <div className=" mr-2 cursor-pointer w-10 h-10 flex items-center rounded-full justify-center hover:bg-gray-300">
          <AppsIcon />
        </div>
        <Avatar
          src={session?.user?.image}
          onClick={() => signOut()}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Header
