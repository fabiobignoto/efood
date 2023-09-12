import Button from '../Button'
import {
  Card,
  CardContainer,
  CardHeader,
  Description,
  Infos,
  Title
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Restaurant from '../../models/Restaurant'

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
    <Card>
      <img className="restaurantImage" src={restaurant.capa} />
      <CardContainer>
        <CardHeader>
          <Title>{restaurant.titulo}</Title>
          <div>
            <Title as="span">{restaurant.avaliacao}</Title>
            <img src={estrela} alt="Estrela" />
          </div>
        </CardHeader>
        <Description>{retornDescricao(restaurant.descricao)}</Description>
        <Button option={restaurant.id}>Saiba mais</Button>
        <Infos>
          {topTags.map((info) => (
            <Button key={info} option={-1}>
              {info}
            </Button>
          ))}
        </Infos>
      </CardContainer>
    </Card>
  )
}

export default RestaurantCard
