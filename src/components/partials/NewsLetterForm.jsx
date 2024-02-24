import { useState } from "react"
import FormInput from "../shared/FormInput"
import Button from "../shared/Button"

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
        <FormInput
          inputClass="px-4 py-2 border rounded-md bg-gray-800 text-gray-300 w-full border-gray-600 focus:outline-none focus:ring focus:ring-gray-300/80"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <Button 
          label='Sign Up'
          type='submit'
          className='btn btn_gray' 
          handleOnClick={onSubmit}
        />
      </div>
    </form>
  )
}

export default NewsLetterForm
