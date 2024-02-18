const SectionHeader = ({firtsText, secondText, className}) => {
  return (
    <header>
      <p className={`text-xl text-primary font-bold uppercase ${className}`}>{firtsText}<span className="text-secondary">{secondText}</span></p>
    </header>
  )
}

export default SectionHeader
