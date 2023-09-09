import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  border: 1px solid ${cores.rosa};
  background-color: ${cores.branca};
  position: relative;
  .restaurantImage {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const CardContainer = styled.div`
  padding: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
  img {
    margin-left: 8px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  margin: 16px 0;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
