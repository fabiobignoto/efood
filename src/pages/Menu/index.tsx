import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RetaurantMenu'

const Menu = () => {
  const id = useParams().id?.slice(1).toString()

  let restaurant = 0
  !id ? (restaurant = 0) : (restaurant = parseInt(id))

  return (
    <div>
      <HeaderMenu />
      {!id ? '' : <RestaurantMenu restaurantId={restaurant} />}
    </div>
  )
}

export default Menu
