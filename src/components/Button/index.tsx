import { ButtonCSS, ButtonLink } from './styles'

export type Props = {
  size: 'big' | 'small'
  children: string
  option: number
}

const Button = ({ size, children, option }: Props) => {
  const destiny = `/menu/:${option}`

  return size === 'big' ? (
    <ButtonLink to={destiny}>{children}</ButtonLink>
  ) : (
    <ButtonCSS>{children}</ButtonCSS>
  )
}

export default Button
