import Product from '../../models/Product'
import ButtonCart from '../ButtonCart'
import { ProductCardCSS, ProductDescription, ProductName } from './style'

const ProductCard = (product: Product) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return (
    <ProductCardCSS>
      <img src={product.image} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>
        <p>{product.description}</p>
      </ProductDescription>
      <ButtonCart action="Adicionar ao Carrinho" />
    </ProductCardCSS>
  )
}

export default ProductCard
