import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import InputField from "../InputField"
import { logoTextLight } from "../../assets"


const NewsLetterForm = () => {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  }

  return (
    <form action="" className="space-y-4">
      <h1 className="text-lg text-gray-200 font-semibold text-center lg:text-2xl">
        Be the first to know about our special offers.
      </h1>
      <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
        <InputField
          className={"px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:outline-none"}
          type={"email"}
          placeholder={"Email Address"}
          value={email}
          handleChange={handleEmailChange}
        />
        <Button 
          label={"Sign Up"}
          type={"submit"}
          className={"w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"} 
          handleOnClick={onSubmit}
        />
      </div>
    </form>
  )
}

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-gray-900">
      <div className="w-full max-w-site mx-auto px-6 py-6">
        
        <NewsLetterForm />

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link to="/">
            <img className="w-auto h-5" src={logoTextLight} alt="light themed logo" />
          </Link>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
              <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
              <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
              <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
