import {
  MainContainer,
  ImageContainer,
  MenuContainer,
  MenuList,
  RestaurantInfo,
  RestaurantTitle,
  Overlay
} from './styles'

import ProductCard from '../ProductCard'
import Restaurant from '../../models/Restaurant'

import { useState } from 'react'
import Product from '../../models/Product'
import Modal from '../Modal'
import Cart from '../Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cartSlice'

type Props = {
  restaurant: Restaurant
}

export interface ModalDetails extends Product {
  modalIsVisible: boolean
}

const RestaurantMenu = ({ restaurant }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
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
    dispatcher(close())
  }
  return (
    <MainContainer>
      <ImageContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <RestaurantInfo>{restaurant.tipo}</RestaurantInfo>
        <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
      </ImageContainer>
      <MenuContainer>
        <MenuList>
          {restaurant.cardapio.map((item, index) => (
            <li key={index}>
              <ProductCard product={item} enviarDados={dataForModal} />
            </li>
          ))}
        </MenuList>
      </MenuContainer>
      {modalInformations.modalIsVisible && (
        <Modal product={modalInformations} resetData={resetModal} />
      )}
      {isOpen && (
        <>
          <Overlay onClick={closeCart} />
          <Cart />
        </>
      )}
    </MainContainer>
  )
}

export default RestaurantMenu
