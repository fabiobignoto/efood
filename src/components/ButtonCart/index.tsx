import { ButtonCartCSS } from './styles'

type Props = {
  action: string
}

const ButtonCart = ({ action }: Props) => {
  return (
    <ButtonCartCSS>
      <p>{action}</p>
    </ButtonCartCSS>
  )
}

export default ButtonCart
