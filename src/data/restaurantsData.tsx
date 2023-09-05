import Restaurant from '../models/Restaurant'

const restaurantsData: Restaurant[] = [
  {
    id: 0,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    image:
      '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
    type: 'Japonesa',
    infos: ['Destaque da semana'],
    menu: [
      {
        id: 0,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 50.9
      },
      {
        id: 1,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 30.95
      },
      {
        id: 2,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 120.35
      },
      {
        id: 3,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 32.55
      },
      {
        id: 4,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 58.99
      },
      {
        id: 5,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 58.99
      }
    ]
  },
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.9,
    image:
      '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/background-italiana.svg',
    type: 'Italiana',

    infos: ['Destaque da semana'],
    menu: [
      {
        id: 0,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/pizzaMarguerita.png',
        price: 30.99
      },
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/pizzaMarguerita.png',
        price: 30.99
      },
      {
        id: 2,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/pizzaMarguerita.png',
        price: 30.99
      },
      {
        id: 3,
        name: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/pizzaMarguerita.png',
        price: 30.99
      }
    ]
  },
  {
    id: 0,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    image:
      '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
    type: 'Japonesa',
    infos: ['Destaque da semana'],
    menu: [
      {
        id: 0,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 78.99
      },
      {
        id: 1,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 98.99
      },
      {
        id: 2,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 199.9
      },
      {
        id: 3,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 58.99
      },
      {
        id: 4,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 150
      },
      {
        id: 5,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 25.9
      },
      {
        id: 6,
        name: 'Combo Sushi',
        description: `Peças preparadas com ingredientes frescos e de qualidade, garantindo um sabor incomparável. O Combo Sushi é uma ótima opção para compartilhar com amigos e familiares.`,
        image:
          '//image-repository-1tb5hrtkn-fabiobignoto.vercel.app/Efood-images/japa.png',
        price: 44.89
      }
    ]
  }
]

export default restaurantsData
