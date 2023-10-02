import { useEffect, useState } from 'react'

import Product from '../../models/Product'

import ButtonCart from '../ButtonCart'
import { ModalDetails } from '../RetaurantMenu'

import * as S from './style'

interface Props {
  product: Product
  enviarDados: (dados: ModalDetails) => void
}

const ProductCard = ({ product, enviarDados }: Props) => {
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (product.descricao.length > 155) {
      setDescricao(`${product.descricao.slice(0, 152)}...`)
    } else {
      setDescricao(product.descricao)
    }
  }, [product.descricao])

  const enviarDadosParaModal = () => {
    enviarDados({
      descricao: product.descricao,
      foto: product.foto,
      id: product.id,
      modalIsVisible: true,
      nome: product.nome,
      porcao: product.porcao,
      preco: product.preco
    })
  }

  return (
    <>
      <S.ProductCardCSS>
        <img src={product.foto} />
        <S.ProductName>{product.nome}</S.ProductName>
        <S.ProductDescription>
          <p>{descricao}</p>
        </S.ProductDescription>
        <div onClick={enviarDadosParaModal}>
          <ButtonCart action="Mais Detalhes" />
        </div>
      </S.ProductCardCSS>
    </>
  )
}

export default ProductCard
