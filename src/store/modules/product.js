import { products } from '../../../src/ProductsData.js'

export default {
  state: {
    CurrentProduct: []
  },
  getters: {
    getCurrentProduct: state => state.CurrentProduct
  },
  mutations: {
    SetCurrentProduct (state, val) {
      state.CurrentProduct = val
    }
  },
  actions: {
    setCurrentProduct ({ commit }, id) {
      products.forEach((item) => {
        if (item.id === +id) {
          commit('SetCurrentProduct', item)
        }
      })
    }
  }
}
