import { useDispatch } from 'react-redux'

import { priceFormat } from '../../utils/functions/priceFormat'

import { CardProduct, remove } from '../../store/reducers/cartSlice'

import * as S from './styles'

import deleteIcon from '../../assets/images/deleteIcon.png'

const CartProductCard = (cartItem: CardProduct) => {
  const dispatcher = useDispatch()

  const removeFromCart = () => {
    dispatcher(remove(cartItem.id))
  }

  return (
    <S.CartProductCardCSS>
      <img
        src={cartItem.product.foto}
        alt={`Fotografia ilustrativa do prato ${cartItem.product.nome}`}
      />
      <div>
        <h3>{cartItem.product.nome}</h3>
        <p>{priceFormat(cartItem.product.preco)}</p>
      </div>
      <S.DeleteIcon
        src={deleteIcon}
        alt="Clique aqui para remover este item do carrinho"
        onClick={removeFromCart}
      />
    </S.CartProductCardCSS>
  )
}

export default CartProductCard
