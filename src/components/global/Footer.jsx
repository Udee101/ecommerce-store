import { Link } from "react-router-dom"
import { logoTextLight } from "../../assets"
import NewsLetterForm from "../partials/NewsLetterForm"


const Footer = () => {
  const footLinks = [
    {
      href: "/",
      label: "About"
    },
    {
      href: "/",
      label: "Blog"
    },
    {
      href: "/",
      label: "News"
    },
    {
      href: "/",
      label: "Contact"
    },
  ]

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
              {
                footLinks.map((link, index) => (
                  <Link key={index} to={link.href} className="px-4 text-sm duration-300 text-gray-200 hover:text-blue-400 hover:underline">
                    {link.label}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
