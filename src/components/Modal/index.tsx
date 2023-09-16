import ButtonCart from '../ButtonCart'
import {
  ModalContainer,
  ModalInformations,
  ModalPhoto,
  ModalProductDetails,
  ModalStyle
} from './styles'

import close from '../../assets/images/fechar.png'
import { ModalDetails } from '../RetaurantMenu'
import { priceFormat } from '../../utils/functions/priceFormat'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cartSlice'

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
    dispatcher(open())
  }

  return (
    <ModalContainer>
      <ModalStyle>
        <ModalPhoto src={product.foto} alt={`Foto do item ${product.nome}`} />
        <ModalInformations>
          <h3>{product.nome}</h3>
          <ModalProductDetails>
            <p>{product.descricao}</p>
            <p>{`Serve: ${product.porcao}`}</p>
          </ModalProductDetails>
          <ButtonCart
            action={`Adicionar ao Carrinho - ${preco}`}
            clickAction={addToCart}
          />
        </ModalInformations>
        <img
          src={close}
          alt="Clique aqui para fechar a descrição do produto"
          className="closeButton"
          onClick={closeModal}
        />
      </ModalStyle>
      <div className="overlay" onClick={closeModal}></div>
    </ModalContainer>
  )
}

export default Modal
