import { styled } from 'styled-components'

import { breakpoints, colors } from '../../styles'

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
  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 16px;
  }
`
const RestaurantDetails = styled.h3`
  position: absolute;

  font-size: 32px;
  color: ${colors.branca};
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

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 768px;
  }
`
export const MenuList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    justify-content: center;
  }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: block;

  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.6;

  z-index: 1;
`
