import RestaurantCard from '../RestaurantCard'
import { RestaurantListCSS, RestaurantListUl } from './styles'

import restaurantsData from '../../data/restaurantsData'

const RestaurantsList = () => {
  return (
    <RestaurantListCSS>
      <RestaurantListUl>
        {restaurantsData.map((restaurante) => (
          <li key={restaurante.id}>
            <RestaurantCard
              id={restaurante.id}
              title={restaurante.title}
              description={restaurante.description}
              image={restaurante.image}
              grade={restaurante.grade}
              infos={restaurante.infos}
              type={restaurante.type}
            />
          </li>
        ))}
      </RestaurantListUl>
    </RestaurantListCSS>
  )
}

export default RestaurantsList
