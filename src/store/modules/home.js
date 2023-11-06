import { products } from '../../../src/ProductsData.js'

export default {
  state: {
    DataSource: []
  },
  getters: {
    getDataSource: state => state.DataSource
  },
  mutations: {
    setDataSource (state, val) {
      state.DataSource = val
    }
  },
  actions: {
    setDataSource ({ state }) {
      setTimeout(() => {
        state.DataSource = products
      }, 2000)
    }
  }
}
