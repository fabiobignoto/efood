import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Product from '../../models/Product'

export type CardProduct = {
  product: Product
  id: number
}

type CartState = {
  items: CardProduct[]
  isOpen: boolean
}

const initialState: CartState = {
  isOpen: false,
  items: []
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
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
