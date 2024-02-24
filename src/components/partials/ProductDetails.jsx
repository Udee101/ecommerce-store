import { useState } from 'react'
import Button from '../shared/Button'
import { formatMoney } from '../../utils'
import Badge from '../shared/Badge'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../stores/cartSlice'
import { ToastContainer } from 'react-toastify'
import Quantity from '../shared/Quantity'

const StarIcon = ({rate}) => {
  return rate > 2.5 ? 
  (<FaStar className="text-yellow-300 mb-1" />) : 
  (<FaRegStarHalfStroke className="text-yellow-300 mb-1"/>)
}

const ProductDetails = ({details}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const onIncrement = () => {
    return setQuantity(quantity => quantity + 1)
  }

  const onDecrement = () => {
    return quantity === 0 ? setQuantity(0) : setQuantity(quantity => quantity - 1);
  }

  const addItemToCart = () => {
    dispatch(
      addToCart({
        id: details.id,
        title: details.title,
        image: details.image,
        price: details.price,
        size: details.size,
        quantity: quantity,
        description: details.description
      })
    )
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
          <Quantity
            className={'border space-x-2 p-1 rounded'}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            quantity={quantity}
          />
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            label={'Add to cart'}
            className={'capitalize btn btn_primary w-full'}
            handleOnClick={addItemToCart}
          />

          <Button
            label={'Buy now'}
            className={'capitalize btn btn_primary_inverted w-full'}
          />
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
        />
    </>
  )
}

export default ProductDetails
