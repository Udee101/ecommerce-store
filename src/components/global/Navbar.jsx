/* eslint-disable no-unused-vars */
import { logoText } from "../../assets"
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full p-4 h-20 bg-white fixed top-0 z-[2] shadow-md">
      <nav className="max-w-site mx-auto h-full flex justify-between items-center">
        <div>
          <img src={logoText} alt="logo image" className="w-32" />
        </div>

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
          <Link
            to="/"
            className={"relative cursor-pointer hover:opacity-75 duration-200"}
          >
            <HiOutlineShoppingCart className="w-6 h-6" />
            <p className="absolute flex items-center justify-center left-3 top-0 text-xs text-center bg-red-400 rounded-full min-w-[0.75rem] min-h-[0.75rem]"><span className="text-white">0</span></p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
