import Product from './Product'

class Restaurant {
  id: number
  titulo: string
  descricao: string
  tipo: string
  destacado: boolean
  avaliacao: number
  capa: string

  cardapio: Product[]

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    tipo: string,
    destacado: boolean,
    avaliacao: number,
    capa: string,
    cardapio: Product[]
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.tipo = tipo
    this.destacado = destacado
    this.avaliacao = avaliacao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export default Restaurant
