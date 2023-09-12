import Product from './Product'

interface Restaurant {
  id: number
  titulo: string
  descricao: string
  tipo: string
  destacado: boolean
  avaliacao: number
  capa: string

  cardapio: Product[]
}

export default Restaurant
