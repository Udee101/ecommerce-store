/* eslint-disable react/prop-types */
const Button = ({ type, className, label, handleOnClick, children}) => {
  return (
    <button 
      type={type} 
      className={className} 
      onClick={handleOnClick}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
