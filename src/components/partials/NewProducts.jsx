/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import HomeSectionsContainer from "../container/HomeSectionsContainer"
import { useLoaderData } from "react-router-dom"

const NewProducts = () => {
  const data = useLoaderData()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const newProducts = data.slice(0, 4)
    setProducts(newProducts)
  }, [data])

  return (
    <HomeSectionsContainer
      sectionTitle1={'New'}
      sectionTitle2={'Products'}
      pathName={'/products'}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={product}
            isNewProduct={true}
          />
        ))}
      </div>
    </HomeSectionsContainer>
  )
}

export default NewProducts
