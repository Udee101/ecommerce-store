import { Outlet } from "react-router-dom"
import Navbar from "../global/Navbar"
import Footer from "../global/Footer"

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
