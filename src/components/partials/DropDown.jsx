import { FaGoogle, FaPowerOff } from "react-icons/fa"
import Button from "../shared/Button"
import { useSelector } from "react-redux"

const DropDown = ({ onClick }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  return (
    <div className="border w-44 bg-white p-2 rounded-md shadow-md">
      {
        !isAuthenticated ?
        <Button 
          label='Sign in'
          className='btn btn_primary w-full flex items-center justify-center gap-2 font-bold'
          handleOnClick={onClick}
        >
          <FaGoogle size="20" className="-order-1"/>
        </Button>

        :

        <Button 
          label='Sign out'
          className='btn btn_secondary w-full flex items-center justify-center gap-2 font-bold'
        >
          <FaPowerOff size="20" className="-order-1"/>
        </Button>
      }
    </div>
  )
}

export default DropDown
