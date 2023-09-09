import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { RestaurantListCSS, RestaurantListUl } from './styles'

import { useEffect, useState } from 'react'

export type Restaurants = {
  restaurants: Restaurant[]
}

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

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
}

export default RestaurantsList
