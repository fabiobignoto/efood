import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantListCSS = styled.main`
  padding-top: 40px;
  padding-bottom: 60px;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 168px 120px;
  }
`

export const RestaurantListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 80px;
  justify-content: center;
  max-width: 1024px;
  margin: auto;

  @media (max-width: ${breakpoints.tablet}) {
    > li {
      max-width: 310px;
      margin: auto;
    }
  }
`
