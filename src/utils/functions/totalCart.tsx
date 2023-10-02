import { CardProduct } from '../../store/reducers/cartSlice'

const totalPrice = (items: CardProduct[]) => {
  return items.reduce((accumulator: number, currentValue) => {
    return (accumulator += currentValue.product.preco)
  }, 0)
}
export default totalPrice
