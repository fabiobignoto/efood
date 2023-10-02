import { useDispatch } from 'react-redux'

import { priceFormat } from '../../utils/functions/priceFormat'

import { add, cartOpen } from '../../store/reducers/cartSlice'

import ButtonCart from '../ButtonCart'
import { ModalDetails } from '../RetaurantMenu'

import close from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  product: ModalDetails
  resetData: () => void
}

const Modal = ({ product, resetData }: Props) => {
  const preco = priceFormat(product.preco)
  const dispatcher = useDispatch()

  const closeModal = () => {
    resetData()
  }

  const addToCart = () => {
    dispatcher(add(product))
    closeModal()
    dispatcher(cartOpen())
  }

  return (
    <S.ModalContainer>
      <S.ModalStyle>
        <S.ModalPhoto src={product.foto} alt={`Foto do item ${product.nome}`} />
        <S.ModalInformations>
          <h3>{product.nome}</h3>
          <S.ModalProductDetails>
            <p>{product.descricao}</p>
            <p>{`Serve: ${product.porcao}`}</p>
          </S.ModalProductDetails>
          <ButtonCart
            action={`Adicionar ao Carrinho - ${preco}`}
            clickAction={addToCart}
          />
        </S.ModalInformations>
        <img
          src={close}
          alt="Clique aqui para fechar a descrição do produto"
          className="closeButton"
          onClick={closeModal}
        />
      </S.ModalStyle>
      <div className="overlay" onClick={closeModal}></div>
    </S.ModalContainer>
  )
}

export default Modal
