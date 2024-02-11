const SectionHeader = ({firtsText, secondText, className}) => {
  return (
    <header>
      <p className={`text-xl text-primary font-semibold uppercase ${className}`}>{firtsText} <span className="text-secondary">{secondText}</span></p>
    </header>
  )
}

export default SectionHeader
