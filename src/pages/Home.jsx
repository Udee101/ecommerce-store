import Banner from "../components/Banner"
import Categories from "../components/partials/Categories"
import NewProducts from "../components/partials/NewProducts"

const Home = () => {
  return (
    <div className="mt-24 p-4">
      <div className="max-w-site mx-auto">
        <Banner />
        <Categories />
        <NewProducts />
      </div>
    </div>
  )
}

export default Home
