<template>
  <div>
    <div>
      <top-of-queue class="top-of-queue" :topOfQueue="topOfQueue"></top-of-queue>
    </div>
    <div>
      <h2 class="up-next" v-if="queueWithoutTop.length > 0">Up Next...</h2>
      <queue-list class="queue-list" :queue="queueWithoutTop"></queue-list>
    </div>
  </div>
</template>

<script>
import TopOfQueue from './TopOfQueue'
import QueueList from './QueueList'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    TopOfQueue,
    QueueList
  },
  computed: {
    ...mapState({queue: 'queue'}),
    topOfQueue () {
      if (this.queue.length > 0) {
        return this.queue[0]
      } else {
        return ''
      }
    },
    queueWithoutTop () {
      var queueWithoutTop = this.queue
      return queueWithoutTop.slice(1)
    }
  }
}

</script>
<style scoped>
.top-of-queue {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;

  padding-bottom: 10px;
}
.up-next {
  padding-left: 2%;
}
</style>

