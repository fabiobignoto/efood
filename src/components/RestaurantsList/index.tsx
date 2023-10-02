import { useGetRestaurantsListQuery } from '../../services/api'

import Restaurant from '../../models/Restaurant'

import RestaurantCard from '../RestaurantCard'

import * as S from './styles'
import Loader from '../Loader'

export type Restaurants = {
  restaurants: Restaurant[]
}

const RestaurantsList = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (restaurants)
    return (
      <S.RestaurantListCSS>
        <S.RestaurantListUl>
          {restaurants.map((restaurante) => (
            <li key={restaurante.id}>
              <RestaurantCard restaurant={restaurante} />
            </li>
          ))}
        </S.RestaurantListUl>
      </S.RestaurantListCSS>
    )

  return <Loader />
}

export default RestaurantsList
