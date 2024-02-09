const InputField = ({ className, type, placeholder, handleChange, value }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  )
}

export default InputField
