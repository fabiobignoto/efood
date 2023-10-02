import styled from 'styled-components'
import { colors } from '../../styles'

export const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 16px;

  width: 100%;

  h3 {
    display: block;
    margin: 48px;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${colors.rosa};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
