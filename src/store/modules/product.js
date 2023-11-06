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
    setCurrentProduct ({ state }, idx) {
      state.CurrentProduct = products[idx]
    }
  }
}
