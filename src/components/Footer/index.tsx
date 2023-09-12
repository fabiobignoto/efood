import { FooterCSS, FooterList, FooterText } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterCSS>
      <Link to={'/'}>
        <img src={logo} alt="Logo da E-Food" id="logo" />
      </Link>
      <FooterList>
        <li>
          <a href="//www.instagram.com">
            <img alt="Logo da rede social instagram" src={instagram} />
          </a>
        </li>
        <li>
          <a href="//www.facebook.com">
            <img alt="Logo da rede social facebook" src={facebook} />
          </a>
        </li>
        <li>
          <a href="//www.twitter.com">
            <img alt="Logo da rede social twitter" src={twitter} />
          </a>
        </li>
      </FooterList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterCSS>
  )
}

export default Footer
