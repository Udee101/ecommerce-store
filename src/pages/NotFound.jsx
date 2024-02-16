import { Link } from "react-router-dom"
import { notFound } from "../assets"

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <img className="w-1/2" src={notFound} alt="image for page not not found" />
      <p>Oops! It seems like you&apos;ve lost your way</p>
      <Link className="bg-primary p-3 text-white text-sm tracking-wider hover:bg-primary-100 duration-300 rounded" to='/'>Take me home</Link>
    </div>
  )
}

export default NotFound
