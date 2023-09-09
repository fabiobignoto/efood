import {
  MainContainer,
  ImageContainer,
  MenuContainer,
  MenuList,
  RestaurantInfo,
  RestaurantTitle
} from './styles'

import ProductCard from '../ProductCard'
import restaurantsData from '../../data/restaurantsData'

type Props = {
  restaurantId: number
}

const RestaurantMenu = ({ restaurantId }: Props) => {
  const selectedRestaurant = restaurantsData[restaurantId]
  return (
    <main>
      <MainContainer>
        <ImageContainer
          style={{ backgroundImage: `url(${selectedRestaurant.image})` }}
        >
          <RestaurantInfo>{selectedRestaurant.type}</RestaurantInfo>
          <RestaurantTitle>{selectedRestaurant.title}</RestaurantTitle>
        </ImageContainer>
        <MenuContainer>
          <MenuList>
            {selectedRestaurant.menu.map((item) => (
              <li key={item.id}>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              </li>
            ))}
          </MenuList>
        </MenuContainer>
      </MainContainer>
    </main>
  )
}

export default RestaurantMenu
