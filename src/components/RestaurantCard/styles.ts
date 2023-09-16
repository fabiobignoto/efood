import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  display: grid;
  width: 472px;
  height: 398px;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 310px;
    height: 450px;
  }

  background-color: ${cores.branca};

  .restaurantImage {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const CardContainer = styled.div`
  height: 181px;
  padding: 8px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  border: 1px solid ${cores.rosa};
  border-top: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    height: 233px;
  }
`

export const CardHeader = styled.div`
  height: 21px;
  display: flex;
  justify-content: space-between;

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
  height: 88px;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
