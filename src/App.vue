<template>
  <v-app dark>

    <!-- Left Drawer -->
    <v-navigation-drawer class="nav-drawer"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      >
    </v-navigation-drawer>


    <v-toolbar class="toolbar" absolute app>

      <span class="roomQ">
        <v-toolbar-title class="headline text-uppercase">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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

      <v-dialog v-model="isSearching">
        <search-results class="search-results" @finishedSearching="isSearching=false"></search-results>
      </v-dialog>
      
    </v-content>
  </v-app>
</template>

<script>
import GetSearchResults from './components/GetSearchResults'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import { db } from '../firebaseConfig'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Home,
    SearchResults
  },
  data () {
    return {
      youtubeURL: '',
      isLoading: false,
      videoTitle: '',
      query: '',
      isSearching: false,
      drawer: false,
      clipped: true
    }
  },
  methods: {
    search () {
      this.isSearching = true
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
  },
  watch: {
    isSearching (val) {
      if (!val)  {
        this.$store.commit('setSearchResults', {
          SearchResults: []
        })
      }
    }
  }
}
</script>
<style scoped>
#title {
  padding-bottom: 2.5%;
}
.roomQ {
  margin-right: 2%;
}
</style>