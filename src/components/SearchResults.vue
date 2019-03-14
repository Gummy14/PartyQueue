<template>
  <div>
    <v-card raised hover class="queue" v-for="video in searchResults" :key="video.id.videoId" v-on:click="addVideoToQueue(video)">
      <span class="video-card">
        <img :src="video.snippet.thumbnails.high.url" width="439" height="247">
        <div class="video-info">
          <h1 id="title">{{ video.snippet.title }}</h1>
        </div>
      </span>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'search-results',
  computed: {
    ...mapState({searchResults: 'searchResults'}),
  },
  methods: {
    addVideoToQueue (video) {
      var queue = this.$store.getters.getQueue

      var newQueueObject = {
        videoId: video.id.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url
      }

      queue.push(newQueueObject)

      this.$store.commit('setQueue', {
        Queue: queue
      })
      this.$store.commit('setSearchResults', {
        SearchResults: []
      })
    }
  }
}
</script>

<style scoped>
.queue {
  margin-left: 1%;
  margin-bottom: 1%; 
}
.video-card {
  display: flex;
}
.video-info {
  margin: 1%;
}
</style>
