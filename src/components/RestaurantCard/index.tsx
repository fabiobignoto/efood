import Restaurant from '../../models/Restaurant'

import Button from '../Button'

import estrela from '../../assets/images/estrela.svg'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  const topTags = []
  if (restaurant.destacado) {
    topTags.push('Destaque da semana')
  }
  topTags.push(restaurant.tipo)

  const retornDescricao = (descricaoOriginal: string) => {
    if (descricaoOriginal.length > 248) {
      return `${descricaoOriginal.slice(0, 245)}...`
    }
    return descricaoOriginal
  }

  return (
    <S.Card>
      <img className="restaurantImage" src={restaurant.capa} />
      <S.CardContainer>
        <S.CardHeader>
          <S.Title>{restaurant.titulo}</S.Title>
          <div>
            <S.Title as="span">{restaurant.avaliacao}</S.Title>
            <img src={estrela} alt="Estrela" />
          </div>
        </S.CardHeader>
        <S.Description>{retornDescricao(restaurant.descricao)}</S.Description>
        <Button option={restaurant.id}>Saiba mais</Button>
        <S.Infos>
          {topTags.map((info) => (
            <Button key={info} option={-1}>
              {info}
            </Button>
          ))}
        </S.Infos>
      </S.CardContainer>
    </S.Card>
  )
}

export default RestaurantCard
