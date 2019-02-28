<template>
  <v-container>
    <v-layout>
      <top-of-queue></top-of-queue>
    </v-layout>
  </v-container>
</template>

<script>
import TopOfQueue from './TopOfQueue'
export default {
  name: 'home',
  components: {
    TopOfQueue
  },
  data () {
    return {
      topOfQueue: ''
    }
  }
}

</script>
