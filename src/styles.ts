import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
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
    background-color: ${cores.creme};
    color: ${cores.rosa};
    line-height: 1;

  }

  #logo{
    max-width:125px;
  }
`
