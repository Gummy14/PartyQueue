<template>
  <v-app dark>
    <v-toolbar class="toolbar" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PARTY</span>
        <span class="font-weight-light">Q</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <template v-slot:extension>
      <v-text-field
        placeholder="Search"
        v-model="query"
        @keypress.native.enter="search()"
      ></v-text-field>
      <v-btn class="add-to-queue" v-on:click="search()" :loading="isLoading">Search</v-btn>
      </template>
    </v-toolbar>

    <v-content>
      <Home class="home"></Home>
    </v-content>
  </v-app>
</template>

<script>
import GetSearchResults from './components/GetSearchResults'
import Home from './components/Home'
import { db } from '../firebaseConfig'
export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      youtubeURL: '',
      isLoading: false,
      videoTitle: '',
      query: ''
    }
  },
  methods: {
    search () {
      if (this.query !== '') {
        GetSearchResults({
          apiKey: this.$store.getters.getApiKey,
          searchQuery: this.query
        }, response => {
          this.$store.commit('setSearchResults', {
            SearchResults: response
          })
          this.query = ''
        })
      }
    }
  },
  mounted () { 
    var self = this
    db.collection('queues').doc('queueDoc').onSnapshot(function (doc) {
      self.$store.commit('setQueue', {
        Queue: doc.data().queue
      })
    })
  }
}
</script>
