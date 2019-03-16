<template>
  <v-container>
    <div v-if="topOfQueue">
      <youtube
        width="100%"
        :height="videoHeight"
        :video-id="topOfQueue.videoId" 
        :player-vars="{ autoplay: 1 }" 
        @ended="removeFromTopOfQueue"/>
    </div>
    <div class="video-info">
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
  },
  computed: {
    videoHeight () {
      return window.innerWidth*.5625
    }
  }
}
</script>

<style scoped>
#title {
  padding-top: 1%;
  padding-left: 1%;
}
.video-info {
  margin: 1%;
}
</style>
