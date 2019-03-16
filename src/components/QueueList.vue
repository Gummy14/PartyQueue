<template>
  <div>
    <v-card raised class="queue" v-for="video in queue" :key="video.videoId">
      <span class="video-card">
        <img :src="video.thumbnail" width="33%" height="100%">
        <div class="video-info">
          <h2 id="title" class="font-weight-light">{{ video.title }}</h2>
          <h3 id="queued-by" class="font-weight-light">QUEUED BY: </h3>
        </div>
      </span>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: [
    'queue'
  ]
}

</script>
<style scoped>
.queue {
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2%; 
}
.video-card {
  display: flex;
}
.video-info {
  margin: 1%;
}
</style>
