import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-8">
      <Link to={"/"}><img src="/logo.png" alt="logo" width={70} /> </Link>
      <ul className="flex gap-5">
        <li> <Link to ={"/"}>Home </Link></li>
        <li> <Link to ={"/about"}>About </Link></li>
        <li> <Link to={"/recipes"}> Recipes</Link></li>
        

      </ul>
    </nav>
  )
}

export default Navbar