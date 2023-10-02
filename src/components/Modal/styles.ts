import { styled } from 'styled-components'

import { ButtonCartCSS } from '../ButtonCart/styles'

import { breakpoints, colors } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 14px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalStyle = styled.section`
  position: absolute;
  z-index: 1;

  display: flex;
  gap: 24px;
  padding: 32px;
  margin: auto;

  max-width: 1024px;
  max-height: 344px;
  width: 100%;
  height: 100%;

  background-color: ${colors.rosa};

  color: ${colors.branca};
  line-height: 22px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
  }

  ${ButtonCartCSS} {
    max-width: 218px;
  }

  .closeButton {
    position: absolute;
    top: 8px;
    right: 8px;

    height: 16px;
    width: 16px;

    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-height: 100vh;
    flex-direction: column;
    max-width: 340px;

    ${ButtonCartCSS} {
      margin-top: 32px;
    }
  }
`
export const ModalInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ModalProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 176px;
  max-width: 656px;
`
export const ModalPhoto = styled.img`
  width: 100%;
  max-width: 280px;
  max-height: 280px;

  object-fit: cover;
`
