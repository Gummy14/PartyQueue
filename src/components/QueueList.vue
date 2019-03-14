<template>
  <div>
    <v-card raised class="queue" v-for="video in queue" :key="video">
      <span class="video-card">
        <img :src="video.thumbnail" width="439" height="247">
        <div class="video-info">
          <h1 id="title">{{ video.title }}</h1>
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
