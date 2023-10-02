import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const CartProductCardCSS = styled.div`
  position: relative;

  background-color: ${colors.textoBotao};
  display: flex;
  gap: 8px;

  height: 100px;
  padding: 8px;
  margin-top: 16px;

  div {
    color: ${colors.rosa};
    letter-spacing: 0em;
  }
  img {
    max-width: 80px;
    max-height: 80px;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    text-align: center;
  }
  p {
    position: absolute;
    bottom: 32px;

    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;

    @media (max-width: ${breakpoints.tablet}) {
      bottom: 16px;
    }
  }
`
export const DeleteIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;

  width: 16px;
  height: 16px;

  cursor: pointer;
`
