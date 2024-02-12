import { useState } from 'react'
import Button from './Button'
import { formatMoney } from '../utils'
import Badge from './Badge'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'

const StarIcon = ({rate}) => {
  return rate > 2.5 ? 
  (<FaStar className="text-yellow-300 mb-1" />) : 
  (<FaRegStarHalfStroke className="text-yellow-300 mb-1"/>)
}

const ProductDetails = ({details}) => {
  const [quantity, setQuantity] = useState(0);

  const onIncrement = () => {
    return setQuantity(quantity => quantity + 1)
  }

  const onDecrement = () => {
    return quantity === 0 ? setQuantity(0) : setQuantity(quantity => quantity - 1);
  }

  return (
    <>
      <div className="w-full h-72 bg-grey p-4 rounded-md flex justify-center md:h-[80%]">
        <img src={details.image} alt="" className="w-4/5 h-full mix-blend-darken object-contain" />
      </div>

      <div className="inline-flex flex-col space-y-4">
        <p className="text-2xl font-semibold">{details.title}</p>
        <p className="font-semibold text-secondary text-lg">{formatMoney(details.price)}</p>

        <div className="rating text-sm flex items-center">
          <p><StarIcon rate={details.rating?.rate} /></p>
          <p>{details.rating?.rate}</p>
          <Badge label={`${details.rating?.count} verified ratings`} className={"text-yellow-600 bg-yellow-100 ml-2"} />
        </div>
        <p className="text-sm">{details.description}</p>
        <div className="flex items-center space-x-2">
          <p className="text-sm">Quantity: </p>
          <div className="border space-x-2 p-1 rounded">
            <Button 
              label={'-'}
              className={'border px-2 rounded'}
              handleOnClick={onDecrement}
            />
            <span>{quantity}</span>
            <Button 
              label={'+'}
              className={'border px-2 rounded'}
              handleOnClick={onIncrement}
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            label={'Add to cart'}
            className={'capitalize bg-primary text-white text-sm w-full p-3 rounded-md hover:bg-primary-100 duration-300'}
          />

          <Button
            label={'Buy now'}
            className={'capitalize bg-white text-primary border-2 border-primary text-sm w-full p-3 rounded-md hover:bg-primary hover:text-white  duration-300'}
          />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
