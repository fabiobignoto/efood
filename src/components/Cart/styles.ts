import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CartCSS = styled.aside`
  z-index: 2;
  width: 360px;
  height: 100%;
  padding: 16px 8px 0;
  background-color: ${cores.rosa};
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80vw;
  }
`

export const CartPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.textoBotao};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  margin: 40px 0 16px;
`
