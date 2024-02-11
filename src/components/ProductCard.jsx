import { Link } from "react-router-dom"
import { formatMoney, formatTitle } from "../utils"
import Badge from "./Badge"

const ProductCard = ({isNewProduct, ...props}) => {
  const { image, category, price, title } = props.product
  return (
    <Link to='/' className="w-full h-[300px] space-y-2">
      <div className="relative w-full h-[70%] p-3 bg-grey rounded-md">
        {isNewProduct && <Badge label={'new'} className={'absolute top-1 right-1 z-[1] bg-green-200 border border-green-200 text-green-500'} />}
        
        <img src={image} alt="" className="object-contain w-full h-full mix-blend-darken" />
      </div>

      <div className="">
        <p>{formatMoney(price)}</p>
        <p>{ formatTitle(title, 16)}</p>
        <p className="capitalize text-xs text-gray-500">{category}</p>
      </div>
    </Link>
  )
}

export default ProductCard
