/* eslint-disable no-unused-vars */
import { logoText } from "../../assets"
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../partials/Cart";
import { useState } from "react";

const Navbar = () => {
  const itemCount = useSelector((state) => state.cart.value.length)
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <header className="w-full p-4 h-20 bg-white fixed top-0 z-[2] shadow-md">
      <nav className="max-w-site mx-auto h-full flex justify-between items-center">
        <Link>
          <img src={logoText} alt="logo image" className="w-32" />
        </Link>

        <div className="flex space-x-6">
          <Button 
            type={"button"}
            className={"border rounded-3xl flex items-center p-1 gap-1 bg-grey hover:opacity-80"}
          >
            <div className="flex items-center space-x-1">
              <HiOutlineUserCircle className="w-6 h-6" /> 
              <p>Account</p> 
              <FaAngleDown />
            </div>
          </Button>
          <Button
            className={"relative cursor-pointer hover:opacity-75 duration-200"}
            handleOnClick={toggleCart}
          >
            <HiOutlineShoppingCart className="w-6 h-6" />
            <p className="absolute flex items-center justify-center left-3 top-0 text-xs text-center bg-red-400 rounded-full min-w-[0.75rem] min-h-[0.75rem]"><span className="text-white">{itemCount}</span></p>
          </Button>
        </div>
      </nav>

      {/* Cart side bar component */}
      <div className={`absolute top-0 right-0 w-full flex flex-col ${showCart ? 'translate-x-0' : 'translate-x-full'} h-screen px-4 py-8 overflow-y-auto bg-gray-600/50 ease-in-out duration-300`}>

        {/* close cart button */}
        <Button className={"absolute right-4 z-[4]"} handleOnClick={toggleCart}>
          <FaTimes size={20} />
        </Button>

        <Cart />
      </div>
    </header>
  )
}

export default Navbar
