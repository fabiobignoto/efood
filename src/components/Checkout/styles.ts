import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonCartCSS } from '../ButtonCart/styles'

type Props = {
  $inputWidth?: string
}

type RowGroupProps = {
  $gap?: string
}

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${colors.textoBotao};

  h3 {
    margin: 16px 0;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 4px;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 85vh;
    justify-content: space-between;
  }
`

export const ButtonsDiv = styled.div`
  margin-top: 16px;

  ${ButtonCartCSS} {
    margin-top: 8px;
  }
`

export const RowGroup = styled.div<RowGroupProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.$gap ? props.$gap : '')};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
  }
`

export const InputGroup = styled.div<Props>`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    margin: 8px 0;

    color: ${colors.textoBotao};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 4px;
    }
  }

  input {
    width: ${(props) => (props.$inputWidth ? props.$inputWidth : '100%')};
    height: 32px;
    padding: 8px;

    background-color: ${colors.textoBotao};
    border: 2px solid transparent;

    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;

    &.hasError {
      background-color: ${colors.rosaClaro};
      border: 2px solid red;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }

  small {
    text-align: left;
    font-size: 10px;
    margin-bottom: 2px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 4px;
  }
`
export const TitleOrder = styled.h3`
  color: ${colors.textoBotao};
  margin-bottom: 16px;
`

export const DivParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 286px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
`

export const Paragraph = styled.p`
  color: ${colors.textoBotao};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
`
