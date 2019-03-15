<template>
  <v-app dark>
    <v-toolbar class="toolbar" absolute app>
      <span class="roomQ">
        <v-toolbar-title class="headline text-uppercase">
          <span>ROOM</span>
          <span class="font-weight-light">Q</span>
        </v-toolbar-title>
      </span>
      <v-text-field
        placeholder="Search"
        v-model="query"
        @keypress.native.enter="search()"
      ></v-text-field>
      <v-btn class="add-to-queue" v-on:click="search()" :loading="isLoading">Search</v-btn>
      <template v-slot:extension scroll-off-screen="true" v-if="queue[0]">
        <h2 id="title" class="font-weight-light">{{ queue[0].title }}</h2>
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
import { mapState } from 'vuex'
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
  },
  computed: {
    ...mapState({queue: 'queue'})
  }
}
</script>
<style scoped>
.roomQ {
  margin-right: 2%;
}
</style>