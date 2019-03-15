<template>
  <v-container>
    <v-layout v-if="topOfQueue">
      <youtube
        width="100%"
        :video-id="topOfQueue.videoId" 
        :player-vars="{ autoplay: 1 }" 
        @ended="removeFromTopOfQueue"/>
    </v-layout>
    <div class="video-info">
        <h1 id="title" >{{ topOfQueue.title }}</h1>
        <h3 id="queued-by" class="font-weight-light">QUEUED BY:</h3>
      </div>
  </v-container>
</template>

<script>
import { db } from '../../firebaseConfig'
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

      db.collection('queues').doc('queueDoc').update({queue: queue})
    }
  }
}
</script>

<style scoped>
.video-info {
  margin: 1%;
}
</style>
