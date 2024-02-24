const Badge = ({className, label}) => {
  return (
    <p className={`text-sm rounded px-1 ${className}`}>{label}</p>
  )
}

export default Badge
