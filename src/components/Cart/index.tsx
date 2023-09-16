import { useSelector } from 'react-redux'
import { CartCSS, CartPriceDiv } from './styles'
import { RootReducer } from '../../store'
import { priceFormat } from '../../utils/functions/priceFormat'
import ButtonCart from '../ButtonCart'
import CartProductCard from '../CartProductCard'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const totalPrice = () => {
    return items.reduce((accumulator: number, currentValue) => {
      return (accumulator += currentValue.product.preco)
    }, 0)
  }

  return (
    <CartCSS>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <CartProductCard id={item.id} product={item.product} />
          </li>
        ))}
      </ul>
      <CartPriceDiv>
        <span>Valor total</span>
        <span>{priceFormat(totalPrice())}</span>
      </CartPriceDiv>
      <ButtonCart action="Continuar com a entrega" />
    </CartCSS>
  )
}
export default Cart
