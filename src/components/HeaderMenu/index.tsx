import {
  HeaderLink,
  HeaderMenuCSS,
  HeaderMenuContainer,
  HeaderMenuText
} from './styles'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <HeaderMenuCSS style={{ backgroundImage: `url(${background})` }}>
      <HeaderMenuContainer>
        <HeaderLink to={'/'}>Restaurantes</HeaderLink>
        <Link to={'/'}>
          <img src={logo} alt="Logo da E-Food" id="logo" />
        </Link>
        <HeaderMenuText>0 produto(s) no carrinho</HeaderMenuText>
      </HeaderMenuContainer>
    </HeaderMenuCSS>
  )
}

export default HeaderMenu
