import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderCSS = styled.header`
  padding: 64px 0 40px;

  height: 384px;
  text-align: center;

  img {
    width: 125px;
    margin-bottom: 138px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
    margin-bottom: 32px;
    img {
      margin-bottom: 50px;
    }
  }
`
export const Slogan = styled.div`
  width: 539px;
  margin: 0 auto;

  font-size: 36px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0em;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    font-size: 24px;
  }
`
