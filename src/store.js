import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: 'AIzaSyDB-sUiK5Ya_g40zT-ttN_r76OyXSfdlf4',
    queue: [],
    searchResults: []
  },
  mutations: {
    setQueue (state, payload) {
      state.queue = payload.Queue
    },
    setSearchResults (state, payload) {
      state.searchResults = payload.SearchResults
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
    },
    getSearchResults (state) {
      return state.searchResults
    }
  }
})
