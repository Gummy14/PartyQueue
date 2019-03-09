import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: 'AIzaSyDB-sUiK5Ya_g40zT-ttN_r76OyXSfdlf4',
    queue: []
  },
  mutations: {
    setQueue (state, payload) {
      state.queue = payload.Queue
    }
  },
  actions: {
  },
  getters: {
    getApiKey (state) {
      return state.apiKey
    },
    getQueue (state) {
      return state.queue
    }
  }
})
