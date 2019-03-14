import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import VueYouTubeEmbed from 'vue-youtube-embed'
const fb = require('../firebaseConfig.js')

Vue.use(VueYouTubeEmbed)
Vue.use(Vuex)

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
