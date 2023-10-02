import { ButtonCartCSS } from './styles'

type Props = {
  action: string
  clickAction?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const ButtonCart = ({
  action,
  clickAction,
  type = 'button',
  disabled = false
}: Props) => {
  return (
    <ButtonCartCSS
      onClick={clickAction}
      type={type}
      disabled={disabled}
      className={disabled ? 'disabledButton' : ''}
    >
      {action}
    </ButtonCartCSS>
  )
}

export default ButtonCart
