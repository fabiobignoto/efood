import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RetaurantMenu'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import Restaurant from '../../models/Restaurant'

const Menu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
