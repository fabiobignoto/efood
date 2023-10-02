import { styled } from 'styled-components'

import { colors } from '../../styles'

export const ButtonCartCSS = styled.button`
  background-color: ${colors.textoBotao};
  height: 24px;
  width: 100%;

  border: none;
  padding: 4px;

  font-size: 14px;
  color: ${colors.rosa};
  text-align: center;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;

  cursor: pointer;

  &.disabledButton {
    cursor: wait;
  }
`
