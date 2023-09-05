import Product from './Product'

class Restaurant {
  id: number
  title: string
  description: string
  type: string
  infos: string[]
  grade: number
  image: string
  menu: Product[]

  constructor(
    id: number,
    title: string,
    description: string,
    type: string,
    infos: string[],
    grade: number,
    image: string,
    menu: Product[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.type = type
    this.infos = infos
    this.grade = grade
    this.image = image
    this.menu = menu
  }
}

export default Restaurant
