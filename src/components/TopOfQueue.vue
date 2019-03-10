<template>
  <v-container>
    <v-layout class="layout" v-if="topOfQueue">
      <youtube class="embededVideo" :video-id="topOfQueue.videoId" :player-vars="{ autoplay: 1 }" @ended="removeFromTopOfQueue"></youtube>
      <div class="video-info">
        <h1 id="title" >{{ topOfQueue.title }}</h1>
        <h3 id="queued-by" class="font-weight-light">QUEUED BY:</h3>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'top-of-queue',
  props: [
    'topOfQueue'
  ],
  methods: {
    removeFromTopOfQueue () {
      var queue = this.$store.getters.getQueue
      queue.shift()

      this.$store.commit('setQueue', {
        Queue: queue
      })
    }
  }
}
</script>

<style scoped>
.video-info {
  margin: 1%;
}
</style>
