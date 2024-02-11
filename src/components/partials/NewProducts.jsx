/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../ProductCard"
import HomeSectionsContainer from "../container/HomeSectionsContainer"

const NewProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const allProducts = res.data
        const newProducts = allProducts.slice(0, 4)
        setProducts(newProducts)
      })
    }
    fetchProducts()
  }, [])


  return (
    <HomeSectionsContainer
      sectionTitle1={'Products'}
      sectionTitle2={'Categories'}
      pathName={'/'}
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
