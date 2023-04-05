import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" width={40} height={35} alt="logo" />
          <span className="font-bold ml-2 text-primary">Blog App</span>
        </div>
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center">
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">About</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Contact</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Author</a>
          </li>
        </ul>
      </div>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium">
          <a
            href="#"
            className="bg-primary px-4 py-2 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
