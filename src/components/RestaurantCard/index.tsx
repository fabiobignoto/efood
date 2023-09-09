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

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  type: string
  grade: number
  image: string
}

const RestaurantCard = ({
  title,
  description,
  infos,
  grade,
  image,
  type,
  id
}: Props) => {
  return (
    <Card>
      <img className="restaurantImage" src={image} />
      <CardContainer>
        <CardHeader>
          <Title>{title}</Title>
          <div>
            <Title as="span">{grade}</Title>
            <img src={estrela} alt="Estrela" />
          </div>
        </CardHeader>
        <Description>{description}</Description>
        <Button option={id}>Saiba mais</Button>
        <Infos>
          {infos.map((info) => (
            <Button key={info} option={-1}>
              {info}
            </Button>
          ))}
          <Button option={-1}>{type}</Button>
        </Infos>
      </CardContainer>
    </Card>
  )
}

export default RestaurantCard
