import { styled } from 'styled-components'
import { cores } from '../../styles'

export const MainContainer = styled.div`
  position: relative;
`
export const ImageContainer = styled.div`
  display: block;
  height: 280px;
  width: 100vw;

  position: relative;

  margin-bottom: 56px;
  padding: 0 calc(50vw - 512px);

  background-size: cover;

  overflow-y: hidden;

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
  position: absolute;

  font-size: 32px;
  color: ${cores.branca};
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`
export const RestaurantInfo = styled(RestaurantDetails)`
  font-weight: 100;
  top: 24px;
`
export const RestaurantTitle = styled(RestaurantDetails)`
  font-weight: 900;
  bottom: 32px;
`
export const MenuContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto 120px;
`
export const MenuList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`
