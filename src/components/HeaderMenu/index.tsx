import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { cartOpen } from '../../store/reducers/cartSlice'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'

import * as S from './styles'

const HeaderMenu = () => {
  const dispatcher = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatcher(cartOpen())
  }

  return (
    <S.HeaderMenuCSS style={{ backgroundImage: `url(${background})` }}>
      <S.HeaderMenuContainer>
        <div>
          <S.HeaderLink to={'/'}>Restaurantes</S.HeaderLink>
        </div>
        <S.ImgDiv>
          <Link to={'/'}>
            <img src={logo} alt="Logo da E-Food" id="logo" />
          </Link>
        </S.ImgDiv>
        <S.HeaderMenuText>
          <span id="longCartDescription" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </span>
          <span id="shortCartDescription" onClick={openCart}>
            Carrinho: <br />
            {items.length} produto(s)
          </span>
        </S.HeaderMenuText>
      </S.HeaderMenuContainer>
    </S.HeaderMenuCSS>
  )
}

export default HeaderMenu
