export default {
  state: {
    BasketProducts: []
  },
  getters: {
    getBasketProducts: state => state.BasketProducts
  },
  mutations: {
    SetPushBasketProducts (state, val) {
      state.BasketProducts.push(val)
    }
  },
  actions: {
  }
}
