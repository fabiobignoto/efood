import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const HeaderMenuCSS = styled.header`
  height: 186px;
  #shortCartDescription {
    display: none;
  }
  @media (max-width: ${breakpoints.tablet}) {
    #shortCartDescription {
      display: inline-block;
      font-size: 16px;
      text-align: center;
    }

    #longCartDescription {
      display: none;
    }
  }
`

export const HeaderMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  height: 100%;
  max-width: 1024px;

  padding: 64px 0;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
    margin: 0 16px;
  }
`
export const ImgDiv = styled.div`
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    #logo {
      max-width: 70px;
    }
  }
`
export const HeaderMenuText = styled.div`
  width: 100%;

  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;

  span {
    cursor: pointer;
  }
`
export const HeaderLink = styled(Link)`
  color: ${colors.rosa};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
`
