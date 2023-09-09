import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RetaurantMenu'
import Restaurant from '../../models/Restaurant'
import { useEffect, useState } from 'react'

const Menu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <div>
      <HeaderMenu />
      <RestaurantMenu restaurant={restaurant} />
    </div>
  )
}

export default Menu
