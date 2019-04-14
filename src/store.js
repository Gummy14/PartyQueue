import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: 'AIzaSyDrSeaXt35dKhxP1ni3ICIFAf_FaqVkHxU',
    apiKeyList: [
      'AIzaSyDrSeaXt35dKhxP1ni3ICIFAf_FaqVkHxU',
      'AIzaSyDYgRSUwq9UVLz4fhWCfTdKgNJEcZjNAdQ',
      'AIzaSyD0pTKL9yLJ622YXFatnHqh_6JtNzd4ID8'
    ],
    apiKeyPosition: 0,
    queue: [],
    searchResults: []
  },
  mutations: {
    setQueue (state, payload) {
      state.queue = payload.Queue
    },
    setSearchResults (state, payload) {
      state.searchResults = payload.SearchResults
    },
    setApiKey (state, payload) {
      state.apiKey = payload.ApiKey
    },
    setApiKeyPosition (state, payload) {
      state.apiKeyPosition = payload.ApiKeyPosition
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
    },
    getTopOfQueue (state) {
      return state.queue[0]
    },
    getApiKeyList (state) {
      return state.apiKeyList
    },
    getApiKeyPosition (state) {
      return state.apiKeyPosition
    }
  }
})
