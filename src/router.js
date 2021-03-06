import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import TopOfQueue from './components/TopOfQueue.vue'
import QueueList from './components/QueueList.vue'
import SearchResults from './components/SearchResults.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/top-of-queue',
      name: 'top-of-queue',
      component: TopOfQueue
    },
    {
      path: '/queue-list',
      name: 'queue-list',
      component: QueueList
    },
    {
      path: '/search-results',
      name: 'search-results',
      component: SearchResults
    }
  ]
})
