import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import SectionHeader from "../components/SectionHeader"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
    }
    fetchProducts()
  }, [])

  return (
    <section className="mt-24 p-4">
      <div className="max-w-site mx-auto py-8">
        <SectionHeader 
          firtsText={'all'}
          secondText={'products'}
          className={'mb-8'}
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} isNewProduct={false} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
