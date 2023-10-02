import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Product from '../../models/Product'

export type CardProduct = {
  product: Product
  id: number
}

type CartState = {
  items: CardProduct[]
  isCartOpen: boolean
  isInCheckoutForms: boolean
}

const initialState: CartState = {
  isCartOpen: false,
  items: [],
  isInCheckoutForms: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const newProduct: CardProduct = {
        id: state.items.length,
        product: action.payload
      }
      state.items.push(newProduct)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.items.map((item) => {
        if (item.id > action.payload) {
          item.id = item.id - 1
        }
      })
    },
    cartOpen: (state) => {
      state.isCartOpen = true
    },
    cartClose: (state) => {
      state.isCartOpen = false
    },
    cartEmpty: (state) => {
      state.items = []
    },
    checkoutOpen: (state) => {
      state.isInCheckoutForms = true
    },
    checkoutClose: (state) => {
      state.isInCheckoutForms = false
    }
  }
})

export const {
  add,
  remove,
  cartOpen,
  cartClose,
  cartEmpty,
  checkoutOpen,
  checkoutClose
} = cartSlice.actions
export default cartSlice.reducer
