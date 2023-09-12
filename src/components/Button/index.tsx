import { ButtonCSS, ButtonLink } from './styles'

export type Props = {
  children: string
  option: number
}

const Button = ({ children, option }: Props) => {
  const destiny = `/menu/${option}`

  return option === -1 ? (
    <ButtonCSS>{children}</ButtonCSS>
  ) : (
    <ButtonLink to={destiny}>{children}</ButtonLink>
  )
}

export default Button
