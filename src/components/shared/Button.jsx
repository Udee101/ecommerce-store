/* eslint-disable react/prop-types */
const Button = ({ type='button', className, label, handleOnClick, disabled=false, children}) => {
  return (
    <button 
      type={type} 
      className={className} 
      onClick={handleOnClick}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
