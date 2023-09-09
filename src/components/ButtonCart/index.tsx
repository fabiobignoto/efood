import React from 'react'
import { ButtonCartCSS } from './styles'

type Props = {
  action: string
}

const ButtonCart = ({ action }: Props) => {
  return (
    <ButtonCartCSS type="button">
      <p>{action}</p>
    </ButtonCartCSS>
  )
}

export default ButtonCart
