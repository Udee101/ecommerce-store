import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../shared/Button"
import Quantity from "../shared/Quantity";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../stores/cartSlice";
import { formatMoney } from "../../utils";

const CartItem = ({item}) => {
  const dispatch = useDispatch()

  const onIncrement = () => dispatch(incrementQuantity(item))

  const onDecrement = () => dispatch(decrementQuantity(item))

  const onRemoveFromCart = () =>  dispatch(removeFromCart(item))

  return (
    <div className="grid grid-cols-3 gap-3 relative items-center w-full py-2">
      <div className="w-full h-28 bg-grey p-2 rounded">
        <img src={item.image} alt="" className="w-full h-full object-contain mix-blend-darken" />
      </div>

      <div className="col-span-2 flex flex-col space-y-4">
        <p className="w-[85%] text-sm whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</p>

        <p className="w-[20%] text-sm"><strong>{formatMoney(item.price)}</strong></p>

        <Quantity
          className={'inline-flex items-center space-x-2 rounded'}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          quantity={item.quantity}
        />

        <Button
          className={'absolute bottom-[50%] right-0 hover:opacity-50'}
          handleOnClick={onRemoveFromCart}
        >
          <FaRegTrashAlt />
        </Button>
      </div>

    </div>
  )
}

export default CartItem
