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

        <Description>{restaurant.descricao}</Description>
        <Infos>
          {topTags.map((info, index) => (
            <Button size="small" key={index} option={-1}>
              {info}
            </Button>
          ))}
        </Infos>
        <Button size="big" option={restaurant.id}>
          Saiba Mais
        </Button>
      </CardContainer>
    </Card>
  )
}

export default RestaurantCard
