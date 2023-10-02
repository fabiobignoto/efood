import { styled } from 'styled-components'

import { ButtonCartCSS } from '../ButtonCart/styles'

import { breakpoints, colors } from '../../styles'

export const ProductCardCSS = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  width: 320px;
  height: 338px;
  padding: 8px;

  background-color: ${colors.rosa};

  color: ${colors.textoBotao};
  letter-spacing: 0em;
  text-align: left;

  img {
    width: 100%;
    height: 167px;
  }

  ${ButtonCartCSS} {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 310px;
    height: 400px;
  }
`
export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
`

export const ProductDescription = styled.div`
  display: block;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  p {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
