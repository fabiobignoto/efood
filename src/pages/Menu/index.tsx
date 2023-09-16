import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RetaurantMenu'
import Footer from '../../components/Footer'
import { useGetRestaurantMenuQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantMenuQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
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
