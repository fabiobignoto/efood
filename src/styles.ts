import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  rosa: '#E66767',
  rosaClaro: 'rgba(255, 204, 203, 0.8)',
  creme: '#FFF8F2',
  branca: '#fff',
  textoBotao: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '768px'
}

export const EstilosGlobais = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;

  }

  body{
    background-color: ${colors.creme};
    color: ${colors.rosa};
    line-height: 1;

  }

  #logo{
    max-width:125px;
  }
`

export const SideBar = styled.aside`
  z-index: 2;
  width: 360px;
  height: 100vh;
  padding: 16px 8px 0;
  background-color: ${colors.rosa};
  display: block;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80vw;
  }
`
