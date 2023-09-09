import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderMenuCSS = styled.header`
  height: 186px;
`
export const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1024px;
  padding: 64px 0;
  margin: auto;
`
export const HeaderMenuText = styled.p`
  width: 30%;

  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
`
export const HeaderLink = styled(Link)`
  width: 30%;

  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
`
