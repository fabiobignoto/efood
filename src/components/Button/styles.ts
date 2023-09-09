import styled from 'styled-components'
import { cores } from '../../styles'

import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonCSS = styled.div<Omit<Props, 'option' | 'size'>>`
  display: inline-block;
  height: 26px;
  width: ${(props) =>
    props.children === 'Destaque da semana' ? '121px' : '61px'};

  padding: 6px 4px;
  margin-right: 8px;

  background-color: ${cores.rosa};

  font-size: 12px;
  color: ${cores.textoBotao};
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`
export const ButtonLink = styled(Link)`
  display: inline-block;
  width: 82px;
  height: 24px;
  margin-right: 8px;
  padding: 4px 6px;

  background-color: ${cores.rosa};

  color: ${cores.textoBotao};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  cursor: pointer;
`
