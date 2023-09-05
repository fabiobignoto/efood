import { FooterCSS, FooterList, FooterText } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'

const Footer = () => {
  return (
    <FooterCSS>
      <img alt="Logo da E-Food" src={logo} id="logo" />
      <FooterList>
        <li>
          <img alt="Logo da rede social instagram" src={instagram} />
        </li>
        <li>
          <img alt="Logo da rede social facebook" src={facebook} />
        </li>
        <li>
          <img alt="Logo da rede social twitter" src={twitter} />
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
