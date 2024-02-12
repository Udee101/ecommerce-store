/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { formatMoney } from "../utils";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Badge from "../components/Badge";
import Button from "../components/Button"
import SectionHeader from "../components/SectionHeader"

const StarIcon = ({rate}) => {
  return rate > 2.5 ? 
  (<FaStar className="text-yellow-300 mb-1" />) : 
  (<FaRegStarHalfStroke className="text-yellow-300 mb-1"/>)
}

const ProductDetails = () => {
  const location = useLocation();
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setDetails(location.state)
  }, [])

  const onIncrement = () => {
    return setQuantity(quantity => quantity + 1)
  }

  const onDecrement = () => {
    return quantity === 0 ? setQuantity(0) : setQuantity(quantity => quantity - 1);
  }
  
  return (
    <section className="mt-24 p-4">
      <div className="max-w-site mx-auto">
        <SectionHeader 
          firtsText={'product'}
          secondText={'details'}
          className={'mb-8'}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="w-full h-72 bg-grey p-4 rounded-md flex justify-center lg:h-[70%]">
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
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
