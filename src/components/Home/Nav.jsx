import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import logo from '../../assests/Shape.png'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24">
      <button className="flex items-center font-bold text-base">
        <MdOutlineKeyboardArrowLeft className="mr-1 text-xl" /> Back
      </button>

      <h1 className="text-lg md:text-xl font-bold">Dashboard</h1>

      <div>
        <img
          src={logo}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  )
}
