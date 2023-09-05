import styled from 'styled-components'
import { cores } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonCSS = styled.div`
  display: inline-block;
  background-color: ${cores.rosa};
  color: ${cores.textoBotao};
  font-size: 14px;
  padding: 4px 6px;
  margin-right: 8px;
`
export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${cores.rosa};
  color: ${cores.textoBotao};
  font-size: 16px;
  padding: 4px 6px;
  margin-right: 8px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
`
