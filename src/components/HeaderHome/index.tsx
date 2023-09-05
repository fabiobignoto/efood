import { HeaderCSS, Slogan } from './styles'
import background from '../../assets/images/BackgroundHero.svg'

import logo from '../../assets/images/logo.svg'

const HeaderHome = () => {
  return (
    <HeaderCSS style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="Logo da e-Food" id="logo" />
      <Slogan>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Slogan>
    </HeaderCSS>
  )
}

export default HeaderHome
