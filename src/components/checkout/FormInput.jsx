import { FaAngleDown } from "react-icons/fa6"

const FormInput = ({ type, placeholder, errors, touched, ...props}) => {
  return (

    <div className="grid">
      { props.isselectfield === 'true' ?
        <>
          <select
            className="input select"
            {...props}
          >
            <option value="">Select a payment method...</option>
            <option value="card">Card</option>
            <option value="bank transfer">Bank Transfer</option>
          </select>
          <div className="absolute top-[33%] right-4 text-gray-400">
            <FaAngleDown />
          </div>
        </>
        :
        <input 
          type={type} 
          className="input text-gray-600"
          placeholder={placeholder}
          {...props}
        />
      }
      {touched?.[props.name] && errors?.[props.name] && (
        <p className="text-red-400"><small>{errors?.[props.name]}</small></p>
      )}
    </div>
  )
}

export default FormInput
