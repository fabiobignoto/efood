import {
  HeaderLink,
  HeaderMenuCSS,
  HeaderMenuContainer,
  HeaderMenuText,
  ImgDiv
} from './styles'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cartSlice'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  const dispatcher = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatcher(open())
  }

  return (
    <HeaderMenuCSS style={{ backgroundImage: `url(${background})` }}>
      <HeaderMenuContainer>
        <div>
          <HeaderLink to={'/'}>Restaurantes</HeaderLink>
        </div>
        <ImgDiv>
          <Link to={'/'}>
            <img src={logo} alt="Logo da E-Food" id="logo" />
          </Link>
        </ImgDiv>
        <HeaderMenuText>
          <span id="longCartDescription" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </span>
          <span id="shortCartDescription" onClick={openCart}>
            Carrinho: <br />
            {items.length} produto(s)
          </span>
        </HeaderMenuText>
      </HeaderMenuContainer>
    </HeaderMenuCSS>
  )
}

export default HeaderMenu
