import React, { useState } from 'react'
import { FaHamburger, FaShoppingCart } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from '../features/cart/cartSlice';


const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const location = useLocation();
  const [showCartSummary, setShowCartSummary] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartCount = cart.length;
  const showCart = location.pathname.startsWith("/grocerystore");
  console.log('li shopping is clicked', showCartSummary);
  return (
    <nav className="flex justify-between items-center mb-8  ">
      <Link to={"/"}><img src="/logo.png" alt="logo" width={70} /> </Link>
      <div className=' flex gap-10'>
        <ul className="hidden md:flex gap-5">
          <li> <Link to={"/"}>Home </Link></li>
          <li> <Link to={"/about"}>About </Link></li>
          <li> <Link to={"/recipes"}> Recipes</Link></li>
          <li> <Link to={"/recipe/surprise-me"}> Suprise me</Link></li>
          <li><Link to={'/grocerystore'}>Grocery Store</Link></li>


        </ul>


        <FaHamburger onClick={() => {
          setmenu(!menu);
          if (showCartSummary) {
            setShowCartSummary(false);
          }
        }} className='text-2xl md:hidden' />

        {showCart && (
          <div className="relative ">
            <div className="flex items-center gap-1" onClick={() => {
              setShowCartSummary(!showCartSummary);
              if (menu) {
                setmenu(false);
              }
            }}>
              <FaShoppingCart className="text-xl cursor-pointer" />
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {cart.length}
              </span>
            </div>
          </div>
        )}
      </div>








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

      {showCartSummary && (
        <div className='absolute top-14 w-4/5 lg:w-1/5 right-14 flex flex-col  mt-6  bg-white shadow-lg z-50 h-64'>

          {cart.length > 0 ? (
            <div className="h-[80vh] flex flex-col border rounded-md overflow-hidden">
            
              <div className="flex-1 overflow-y-auto p-4">
                {cart.map((item) => (
                  <div key={item.id} className="mb-4 p-2 border-b">
                    <p className="font-semibold">{item.name}</p>
                    <p>Price: Rs.{Math.floor(item.price * 87)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className="font-bold">
                      Total: Rs.{Math.floor(item.price * item.quantity * 87)}
                    </p>
                    <button
                      className="bg-red-600 text-white rounded-md py-2 font-semibold w-1/2 md:w-3/4 mt-2"
                      onClick={() => dispatch(removeToCart(item.cartItemId))}
                    >
                      Remove from cart
                    </button>
                  </div>
                ))}
              </div>

           
              <div className="border-t p-4 bg-white shadow-md">
                <h3 className="text-xl font-bold">
                  Grand Total: Rs.
                  {Math.floor(
                    cart.reduce((total, item) => total + item.price * item.quantity * 87, 0)
                  )}
                </h3>
              </div>
            </div>

          ) : (
            <p className='text-xl text-center'>Your cart is empty.</p>
          )}
        </div>
      )}


    </nav>
  )
}
export default Navbar