/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import SectionHeader from "../SectionHeader"
import axios from "axios"
import ProductCard from "../ProductCard"
import { Link } from "react-router-dom"

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
    <section className="space-y-8 my-8">
      <SectionHeader
        firtsText={'New'}
        secondText={'Products'}
        className={'text-center'}
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={product}
            isNewProduct={true}
          />
        ))}
      </div>

      <div className="text-center">
        <Link 
          to='/'
          className='text-sm text-white bg-primary w-24 p-3 tracking-wide rounded-md transition-colors duration-300 hover:bg-primary-100 focus:outline-none focus:ring focus:ring-primary-100'
        >shop all</Link>
      </div>
    </section>
  )
}

export default NewProducts