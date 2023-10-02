import { useDispatch, useSelector } from 'react-redux'

import { priceFormat } from '../../utils/functions/priceFormat'
import totalPrice from '../../utils/functions/totalCart'

import { RootReducer } from '../../store'
import { checkoutOpen } from '../../store/reducers/cartSlice'

import ButtonCart from '../ButtonCart'
import CartProductCard from '../CartProductCard'

import { CartTextDiv } from './styles'
import { SideBar } from '../../styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatcher = useDispatch()

  const openCheckout = () => {
    if (items.length > 0) {
      dispatcher(checkoutOpen())
    }
    return ''
  }

  return (
    <SideBar>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <CartProductCard id={item.id} product={item.product} />
              </li>
            ))}
          </ul>
          <CartTextDiv>
            <span>Valor total</span>
            <span>{priceFormat(totalPrice(items))}</span>
          </CartTextDiv>
          <ButtonCart
            action="Continuar com a entrega"
            clickAction={openCheckout}
          />
        </>
      ) : (
        <CartTextDiv>Seu carrinho se encontra vazio.</CartTextDiv>
      )}
    </SideBar>
  )
}
export default Cart
