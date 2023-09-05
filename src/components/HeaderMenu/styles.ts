import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderMenuCSS = styled.header`
  height: 186px;
`
export const HeaderMenuContainer = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 64px 0;
`
export const HeaderMenuText = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  width: 30%;
`
export const HeaderLink = styled(Link)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #e66767;
  text-decoration: none;
  width: 30%;
`
