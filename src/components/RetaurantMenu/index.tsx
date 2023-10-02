import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { cartClose, checkoutClose } from '../../store/reducers/cartSlice'

import Restaurant from '../../models/Restaurant'
import Product from '../../models/Product'

import Cart from '../Cart'
import Checkout from '../Checkout'
import Modal from '../Modal'
import ProductCard from '../ProductCard'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

export interface ModalDetails extends Product {
  modalIsVisible: boolean
}

const RestaurantMenu = ({ restaurant }: Props) => {
  const { isCartOpen, isInCheckoutForms } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatcher = useDispatch()

  const [modalInformations, setModalInformations] = useState<ModalDetails>({
    modalIsVisible: false,
    descricao: '',
    foto: '',
    nome: '',
    preco: 0,
    porcao: '',
    id: -1
  })

  const dataForModal = (dados: ModalDetails) => {
    setModalInformations(dados)
  }

  const resetModal = () => {
    setModalInformations({
      modalIsVisible: false,
      descricao: '',
      foto: '',
      nome: '',
      preco: 0,
      porcao: '',
      id: -1
    })
  }

  const closeCart = () => {
    dispatcher(cartClose())
    dispatcher(checkoutClose())
  }

  return (
    <S.MainContainer>
      <div className={isCartOpen || isInCheckoutForms ? 'scroll-blocked' : ''}>
        <S.ImageContainer
          style={{ backgroundImage: `url(${restaurant.capa})` }}
        >
          <S.RestaurantInfo>{restaurant.tipo}</S.RestaurantInfo>
          <S.RestaurantTitle>{restaurant.titulo}</S.RestaurantTitle>
        </S.ImageContainer>
        <S.MenuContainer>
          <S.MenuList>
            {restaurant.cardapio.map((item, index) => (
              <li key={index}>
                <ProductCard product={item} enviarDados={dataForModal} />
              </li>
            ))}
          </S.MenuList>
        </S.MenuContainer>
        {modalInformations.modalIsVisible && (
          <Modal product={modalInformations} resetData={resetModal} />
        )}
      </div>

      {isCartOpen && !isInCheckoutForms && (
        <>
          <S.Overlay onClick={closeCart} />
          <Cart />
        </>
      )}
      {isCartOpen && isInCheckoutForms && (
        <>
          <S.Overlay onClick={closeCart} />

          <Checkout />
        </>
      )}
    </S.MainContainer>
  )
}

export default RestaurantMenu
