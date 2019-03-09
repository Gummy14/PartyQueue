<template>
  <v-app dark>
    <v-toolbar class="toolbar" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PARTY</span>
        <span class="font-weight-light">QUEUE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        placeholder="Enter a YouTube URL"
        v-model="youtubeURL"
        @keypress.native.enter="addVideoToQueue()"
      ></v-text-field>
      <v-btn class="add-to-queue" v-on:click="addVideoToQueue()" :loading="isLoading">Add To Queue</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home class="home"></Home>
    </v-content>
  </v-app>
</template>

<script>
import GetTitle from './components/GetTitle'
import Home from './components/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      youtubeURL: '',
      isLoading: false,
      videoTitle: ''
    }
  },
  methods: {
    addVideoToQueue () {
      this.isLoading = true
      var queue = this.$store.getters.getQueue

      var youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
      var youtubeVideoID = this.youtubeURL.substring(32,43)
      var autoplay

      if(queue.length === 0) {
        autoplay = '?autoplay=1'
      } else {
        autoplay = ''
      }

      var newQueueURL = youtubeEmbedTemplate.concat(youtubeVideoID.concat(autoplay))

      GetTitle({
        apiKey: this.$store.getters.getApiKey,
        videoId: youtubeVideoID
      }, 
      response => {
        this.videoTitle = response

        var newQueueObject = {
          url: newQueueURL,
          title: this.videoTitle
        }

        queue.push(newQueueObject)
      
        this.$store.commit('setQueue', {
          Queue: queue
        })
        
        this.isLoading = false
        this.youtubeURL = ''
      })
    }
  }
}
</script>
