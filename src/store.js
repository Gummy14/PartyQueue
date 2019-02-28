import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topOfQueue: ''
  },
  mutations: {
    setTopOfQueue (state, payload) {
      state.topOfQueue = payload.TopOfQueue
    }
  },
  actions: {

  },
  getters: {
    getTopOfQueue (state) {
      return state.topOfQueue
    }
  }
})
