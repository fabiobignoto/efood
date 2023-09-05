import Restaurant from '../models/Restaurant'
import pizza from './../assets/images/pizzaMarguerita.png'
import backgroundItalian from '../assets/images/background-italiana.svg'

const restaurantsData: Restaurant[] = [
  {
    id: 0,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    image: backgroundItalian,
    type: 'Italiana',
    infos: ['Destaque da semana'],
    menu: [
      {
        id: 0,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: './../../assets/images/pizzaMarguerita.png'
      },
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: pizza
      },
      {
        id: 2,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: pizza
      },
      {
        id: 3,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: pizza
      },
      {
        id: 4,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: pizza
      },
      {
        id: 5,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image: pizza
      }
    ]
  },
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    image: '//placehold.it/472x217',
    type: 'Japonesa',

    infos: ['Destaque da semana'],
    menu: [
      {
        id: 0,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image:
          'https://image-repository-cm1uhus7v-fabiobignoto.vercel.app/Pavlovs-Cat.webp'
      }
    ]
  },
  {
    id: 2,
    title: 'Terceiro Restaurante  ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    image: '//placehold.it/472x217',
    type: 'Japonesa',

    infos: ['Destaque da semana'],
    menu: []
  }
]

export default restaurantsData
