<template>
  <v-container>
    <v-layout class="layout" v-if="topOfQueue">
      <iframe class="embededVideo" width="879" height="494" :src="topOfQueue.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
  ]
}
</script>

<style scoped>
.video-info {
  margin: 1%;
}
</style>
