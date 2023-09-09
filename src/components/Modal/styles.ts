import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonCartCSS } from '../ButtonCart/styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

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
  background-color: ${cores.rosa};
  color: ${cores.branca};

  line-height: 22px;
  padding: 32px;
  margin: auto;

  position: absolute;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  max-height: 344px;
  width: 100%;
  height: 100%;
  z-index: 1;

  h3 {
    font-weight: 900;
    font-size: 18px;
    align-items: center;
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
`
export const ModalInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ModalProductDetails = styled.div`
  height: 176px;
  max-width: 656px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ModalPhoto = styled.img`
  width: 100%;
  max-width: 280px;
  max-height: 280px;
`
