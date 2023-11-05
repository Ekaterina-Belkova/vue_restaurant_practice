export default {
  state: {
    Products: [
      {
        id: 1,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        price: 2700
      },
      {
        id: 2,
        url: require('@/assets/item-two.png'),
        item: 'Свиные ребрышки на гриле с зеленью',
        price: 1600
      },
      {
        id: 3,
        url: require('@/assets/item-three.png'),
        item: 'Креветки по-королевски в лимонном соке',
        price: 1820
      },
      {
        id: 4,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        price: 2700
      },
      {
        id: 5,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        price: 2700
      },
      {
        id: 6,
        url: require('@/assets/item-two.png'),
        item: 'Свиные ребрышки на гриле с зеленью',
        price: 1600
      },
      {
        id: 7,
        url: require('@/assets/item-three.png'),
        item: 'Креветки по-королевски в лимонном соке',
        price: 1820
      },
      {
        id: 8,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        price: 2700
      }
    ],
    BasketProducts: []
  },
  getters: {
    getBasketProducts: state => state.BasketProducts
  },
  mutations: {
    SetPushBasketProducts (state, val) {
      state.BasketProducts.push(val)
    },
    SetRemoveBasket (state, val) {
      console.log('SetRemoveBasket', val)
      state.BasketProducts = state.BasketProducts.filter((item) => {
        return item.idx !== val
      })
    }
  },
  actions: {
  }
}
