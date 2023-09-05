import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterCSS = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${cores.textoBotao};
  text-align: center;
  padding: 40px;
`

export const FooterText = styled.p`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 480px;
  margin: 80px auto 0;
`
export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;
`
