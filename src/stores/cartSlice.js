import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIsInCart = state.value.find(item => action.payload.id === item.id)

      if(itemIsInCart) {
        toast.info('Item already exist')
      } else {
        state.value.push(action.payload)
        toast.success('successfully added item!')
      }
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter(item => item.id != action.payload.id)

      toast.info('Item removed successfully!')
    },

    emptyCart: (state) => {
      state.value = []

      toast.info('All items have been removed!')
    },

    incrementQuantity: (state, action) => {
      const item = state.value.find(item => action.payload.id === item.id)

      if(item) {
        item.quantity++
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.value.find(item => action.payload.id === item.id)

      item.quantity === 1 ? item.quantity = 1 : item.quantity--
    }
  }
})

export const { addToCart, removeFromCart, emptyCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
