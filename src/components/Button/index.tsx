import * as S from './styles'

export type Props = {
  children: string
  option: number
}

const Button = ({ children, option }: Props) => {
  const destiny = `/menu/${option}`

  return option === -1 ? (
    <S.ButtonCSS>{children}</S.ButtonCSS>
  ) : (
    <S.ButtonLink to={destiny}>{children}</S.ButtonLink>
  )
}

export default Button
