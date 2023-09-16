import Restaurant from '../../models/Restaurant'
import { useGetRestaurantsListQuery } from '../../services/api'
import RestaurantCard from '../RestaurantCard'
import { RestaurantListCSS, RestaurantListUl } from './styles'

export type Restaurants = {
  restaurants: Restaurant[]
}

const RestaurantsList = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (restaurants)
    return (
      <RestaurantListCSS>
        <RestaurantListUl>
          {restaurants.map((restaurante) => (
            <li key={restaurante.id}>
              <RestaurantCard restaurant={restaurante} />
            </li>
          ))}
        </RestaurantListUl>
      </RestaurantListCSS>
    )

  return <h3>Carregando...</h3>
}

export default RestaurantsList
