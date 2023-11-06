import { createStore } from 'vuex'

import home from './modules/home.js'
import basket from './modules/basket.js'
import product from './modules/product.js'
// import ProductsData from '../ProductsData.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    basket,
    product
  }
})
