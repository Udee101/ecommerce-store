import Button from "./Button"

const Quantity = ({onIncrement, onDecrement, quantity, className}) => {
  return (
    <div className={className}>
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
  )
}

export default Quantity
