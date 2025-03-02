import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  return (
    <nav className="flex justify-between items-center mb-8 ">
      <Link to={"/"}><img src="/logo.png" alt="logo" width={70} /> </Link>
      <ul className="hidden md:flex gap-5">
        <li> <Link to={"/"}>Home </Link></li>
        <li> <Link to={"/about"}>About </Link></li>
        <li> <Link to={"/recipes"}> Recipes</Link></li>
        <li> <Link to={"/recipe/surprise-me"}> Suprise me</Link></li>
        <li><Link to={'/grocerystore'}>Grocery Store</Link></li>
      </ul>
      <FaHamburger onClick={() => setmenu(!menu)} className='text-2xl md:hidden' />
      {
        menu && (
          <div className='absolute top-20 right-12 w-1/2 bg-gray-500 text-center'>
            <ul className=" md:hidden flex flex-col gap-3 font-semibold  ">
              <li> <Link to={"/"}>Home </Link></li>
              <li> <Link to={"/about"}>About </Link></li>
              <li> <Link to={"/recipes"}> Recipes</Link></li>
              <li> <Link to={"/recipe/surprise-me"}> Suprise me</Link></li>
              <li><Link to={'/grocerystore'}>Grocery Store</Link></li>
            </ul>
          </div>
        )
      }
    </nav>
  )
}
export default Navbar