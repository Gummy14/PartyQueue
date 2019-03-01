<template>
  <v-container>
    <v-layout>
      <iframe class="embededVideo" width="879" height="494" :src="topOfQueue" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'top-of-queue',
  data () {
    return {
      topOfQueue: ''
    }
  },
  computed: {
    ...mapState({youtubeEmbedLink: 'topOfQueue'}),
  },
  watch: {
    youtubeEmbedLink (val) {
      this.topOfQueue = val
    }
  },
}
</script>

<style>

</style>
