import { priceFormat } from '../../utils/functions/priceFormat'
import { CartProductCardCSS, DeleteIcon } from './styles'
import deleteIcon from '../../assets/images/deleteIcon.png'
import { useDispatch } from 'react-redux'
import { CardProduct, remove } from '../../store/reducers/cartSlice'

const CartProductCard = (cartItem: CardProduct) => {
  const dispatcher = useDispatch()

  const removeFromCart = () => {
    dispatcher(remove(cartItem.id))
  }

  return (
    <CartProductCardCSS>
      <img
        src={cartItem.product.foto}
        alt={`Fotografia ilustrativa do prato ${cartItem.product.nome}`}
      />
      <div>
        <h3>{cartItem.product.nome}</h3>
        <p>{priceFormat(cartItem.product.preco)}</p>
      </div>
      <DeleteIcon
        src={deleteIcon}
        alt="Clique aqui para remover este item do carrinho"
        onClick={removeFromCart}
      />
    </CartProductCardCSS>
  )
}

export default CartProductCard
