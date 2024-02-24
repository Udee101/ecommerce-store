/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import SectionHeader from "../components/shared/SectionHeader"
import ProductDetails from "../components/partials/ProductDetails";


const Product = () => {
  const location = useLocation();
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(location.state)
  }, [])
  
  return (
    <section className="mt-24 p-4">
      <div className="max-w-site mx-auto py-8">
        <SectionHeader 
          firtsText={'product'}
          secondText={'details'}
          className={'mb-8'}
        />
        <div className="grid gap-4 md:grid-cols-2 min-h-[40vh]">
          <ProductDetails details={details} />
        </div>
      </div>
    </section>
  )
}

export default Product
