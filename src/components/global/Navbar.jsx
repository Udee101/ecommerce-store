/* eslint-disable no-unused-vars */
import { logoText } from "../../assets"
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { toggleCartNaveState } from "../../stores/cartSlice";
import { addUser } from "../../stores/userSlice"; 
import DropDown from "../partials/DropDown";
import { useState } from "react";
import AuthPopUp from "../partials/AuthPopUp";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const itemCount = useSelector((state) => state.cart.cartValue.length)
  const showCart = useSelector((state) => state.cart.cartNavState)
  const userInfo = useSelector((state) => state.user.userInfo)

  const dispatch = useDispatch()
  const toggleCart = () => dispatch(toggleCartNaveState())
  const saveUserDetails = (payload) => dispatch(addUser(payload))

  const firstName = userInfo?.full_name?.split(" ")[0] 

  const login = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user
        const userData = {
          id: user.uid,
          full_name: user.displayName,
          email: user.email,
          profile_img: user.photoURL
        }
        setShowDropdown(false)
        saveUserDetails(userData)
      })
      .catch((error) => console.error(error))
  }

  return (
    <header className="w-full p-4 h-20 bg-white fixed top-0 z-[2] shadow-md">
      <nav className="max-w-site mx-auto h-full flex justify-between items-center">
        <Link>
          <img src={logoText} alt="logo image" className="w-32" />
        </Link>

        <div className="flex space-x-6 relative">
          <Button 
            className={"border btn rounded-3xl flex items-center px-2 py-1 gap-1 bg-grey hover:opacity-80"}
            handleOnClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center space-x-1">
              <>
                {
                  userInfo.profile_img ? 
                  <img src={userInfo.profile_img} alt="profile image" className="w-6 h-6 rounded-full" />
                  :
                  <HiOutlineUserCircle className="w-6 h-6" /> 
                }
              </>
              <p>{ userInfo.length !== 0 ? firstName : 'Account'}</p> 
              <FaAngleDown />
            </div>
          </Button>

          {/* dropdown menu */}
          <div className={`absolute top-10 right-5 duration-300 ease-in-out ${showDropdown ? 'translate-y-1 opacity-100' : 'translate-y-0 opacity-0'}`}>
            <DropDown onClick={login} />
          </div>

          <Button
            className={"relative cursor-pointer hover:opacity-75 duration-200"}
            handleOnClick={toggleCart}
          >
            <HiOutlineShoppingCart className="w-6 h-6" />
            <p className="absolute flex items-center justify-center left-3 top-0 text-xs text-center bg-red-400 rounded-full min-w-[0.75rem] min-h-[0.75rem]"><span className="text-white">{itemCount}</span></p>
          </Button>
        </div>
      </nav>

      {/* <AuthPopUp /> */}

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
