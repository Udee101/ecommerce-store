import SectionHeader from "../SectionHeader"
import { Link } from "react-router-dom"

const HomeSectionsContainer = ({sectionTitle1, sectionTitle2, children, pathName}) => {
  return (
    <section className="space-y-8 py-16">
      <SectionHeader
        firtsText={sectionTitle1}
        secondText={sectionTitle2}
        className={'text-center'}
      />
      
      {children}

      <div className="text-center">
        <Link 
          to={pathName}
          className='text-sm text-white bg-primary w-24 p-3 tracking-wide rounded-md transition-colors duration-300 hover:bg-primary-100 focus:outline-none focus:ring focus:ring-primary-100'
        >shop all</Link>
      </div>
    </section>
  )
}

export default HomeSectionsContainer
