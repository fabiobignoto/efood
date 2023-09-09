import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonCartCSS } from '../ButtonCart/styles'

export const ProductCardCSS = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  max-width: 320px;
  height: 338px;
  padding: 8px;

  background-color: ${cores.rosa};

  color: ${cores.textoBotao};
  letter-spacing: 0em;
  text-align: left;

  img {
    width: 100%;
    height: 167px;
  }

  ${ButtonCartCSS} {
    width: 100%;
  }
`
export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
`

export const ProductDescription = styled.div`
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
