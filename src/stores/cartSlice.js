import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartValue: [],
    cartNavState: false
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIsInCart = state.cartValue.find(item => action.payload.id === item.id)

      if(itemIsInCart) {
        toast.info('Item already exist')
      } else {
        state.cartValue.push(action.payload)
        toast.success('successfully added item!')
      }
    },

    removeFromCart: (state, action) => {
      state.cartValue = state.cartValue.filter(item => item.id != action.payload.id)

      toast.info('Item removed successfully!')
    },

    emptyCart: (state) => {
      state.cartValue = []

      toast.info('All items have been removed!')
    },

    incrementQuantity: (state, action) => {
      const item = state.cartValue.find(item => action.payload.id === item.id)

      if(item) {
        item.quantity++
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartValue.find(item => action.payload.id === item.id)

      item.quantity === 1 ? item.quantity = 1 : item.quantity--
    },

    toggleCartNaveState: (state) => {
      state.cartNavState ? state.cartNavState = false : state.cartNavState = true
    },
  }
})

export const { addToCart, removeFromCart, emptyCart, incrementQuantity, decrementQuantity, toggleCartNaveState } = cartSlice.actions

export default cartSlice.reducer
