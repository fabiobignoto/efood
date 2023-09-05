import { styled } from 'styled-components'
import { cores } from '../../styles'

export const MainContainer = styled.div`
  position: relative;
`

export const RestaurantImage = styled.img`
  overflow-x: visible;
  width: 100%;
`

export const MenuContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto 120px;
`

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
export const ImageContainer = styled.div`
  height: 280px;
  width: 100vw;
  display: block;
  overflow-y: hidden;
  margin-bottom: 56px;
  background-size: cover;
  padding: 0 calc(50vw - 512px);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
  }
`
const RestaurantDetails = styled.h3`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: ${cores.branca};
  position: absolute;
`
export const RestaurantTitle = styled(RestaurantDetails)`
  font-weight: 900;
  bottom: 32px;
`
export const RestaurantInfo = styled(RestaurantDetails)`
  font-weight: 100;
  top: 32px;
`
