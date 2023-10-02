import { Link } from 'react-router-dom'

import background from '../../assets/images/BackgroundHero.svg'
import logo from '../../assets/images/logo.svg'

import { HeaderCSS, Slogan } from './styles'

const HeaderHome = () => {
  return (
    <HeaderCSS style={{ backgroundImage: `url(${background})` }}>
      <Link to={'/'}>
        <img src={logo} alt="Logo da E-Food" id="logo" />
      </Link>
      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </HeaderCSS>
  )
}

export default HeaderHome
