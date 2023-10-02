import { useParams } from 'react-router-dom'

import { useGetRestaurantMenuQuery } from '../../services/api'

import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RetaurantMenu'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

const Menu = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantMenuQuery(id!)

  if (!restaurant) {
    return <Loader />
  }
  return (
    <div>
      <HeaderMenu />
      {!id ? '' : <RestaurantMenu restaurant={restaurant} />}
      <Footer />
    </div>
  )
}

export default Menu
