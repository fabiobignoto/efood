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
import { info } from 'console'

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
        <Infos>
          {infos.map((info) => (
            <Button size="small" key={info} option={-1}>
              {info}
            </Button>
          ))}
          <Button size="small" option={-1}>
            {type}
          </Button>
        </Infos>
        <Button size="big" option={id}>
          Saiba Mais
        </Button>
      </CardContainer>
    </Card>
  )
}

export default RestaurantCard
