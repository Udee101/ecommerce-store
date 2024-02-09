import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import InputField from "../InputField"


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
      <h3 className="text-2xl font-bold">Sign up for our newsletter</h3>
      <p className="text-sm">
        Be the first to know about our special offers, news, and updates.
      </p>
      <div className="border border-black p-2 w-[85%] md:w-[80%]">
        <InputField
          className={"w-[70%] focus:outline-none"}
          type={"email"}
          placeholder={"Email Address"}
          value={email}
          handleChange={handleEmailChange}
        />
        <Button 
          label={"Sign Up"}
          type={"submit"}
          className={"border-l border-black w-[30%] text-sm font-bold"} 
          handleOnClick={onSubmit}
        />
      </div>
    </form>
  )
}

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="max-w-site mx-auto p-4">
        <div
          className="grid space-y-8 items-center border-t border-black pt-6 md:grid-cols-4 md:gap-x-8"
        >
          <div className="md:col-span-2">
            <NewsLetterForm />
          </div>

          <div>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-sm text-gray-500 hover:text-black"
                >Home</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-sm text-gray-600 hover:text-black"
                >About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-3 bg-black text-white text-sm text-center uppercase mt-12">
        Copyrights VE-Store.com. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
