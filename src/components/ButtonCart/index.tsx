import React from 'react'
import { ButtonCartCSS } from './styles'

type Props = {
  action: string
  clickAction?: () => void
}

const ButtonCart = ({ action, clickAction }: Props) => {
  return <ButtonCartCSS onClick={clickAction}>{action}</ButtonCartCSS>
}

export default ButtonCart
