import { Link } from "react-router-dom";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import CartItem from "../CartItem";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../../utils";
import { useEffect, useState } from "react";
import { emptyCart } from "../../stores/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const getTotal = () => {
    let price = 0;
    items.map((item) => (price += item.price * item.quantity))
    setTotal(price)
  };
  useEffect(() => {getTotal()}, [items]);

  const onRemoveAllItemsFromCart = () => dispatch(emptyCart())

  return (
    <aside className="absolute top-0 right-0 flex flex-col w-[85%] md:w-[45%] lg:w-[35%] duration-500 h-screen px-4 pt-8 pb-4 overflow-y-auto bg-white border-l ltr:border-r-0 rtl:border-l shadow-md">
      <div className="relative flex flex-col flex-auto">
        
        <SectionHeader 
          firtsText={'your'}
          secondText={'cart'}
        />

        <div className="w-full divide-y-2 py-8">
          {
            items.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          }
        </div>

        {
          items.length === 0 && <div className="h-full w-full flex items-center justify-center">
            <p><strong>Your Cart Is Empty</strong></p>
          </div>
        }
      </div>

      <div>
        <div className="w-full flex justify-between mb-2">
          <p className="text-gray-500">Subtotal: </p>
          <p><strong>{formatMoney(total)}</strong></p>
        </div>
        <div className="flex flex-row gap-2">
          <Button
            label={'empty cart'}
            handleOnClick={onRemoveAllItemsFromCart}
            className={'capitalize bg-secondary text-white text-sm w-full p-3 rounded-md hover:bg-secondary-100  duration-300'}
          />
          <Link className="capitalize text-white text-center bg-primary text-sm w-full p-3 rounded-md hover:bg-primary-100 duration-300">checkout</Link>
        </div>
      </div>
    </aside>
  )
}

export default Cart