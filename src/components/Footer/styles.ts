import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterCSS = styled.footer`
  width: 100%;
  height: 298px;

  padding: 40px;

  background-color: ${colors.textoBotao};
  text-align: center;
`

export const FooterText = styled.p`
  max-width: 480px;
  margin: 80px auto 0;

  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
`
export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`
