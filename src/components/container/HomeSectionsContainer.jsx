import SectionHeader from "../shared/SectionHeader"
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
          className='btn btn_primary w-24'
        >shop all</Link>
      </div>
    </section>
  )
}

export default HomeSectionsContainer
