<template>
  <div>
    <div>
      <top-of-queue class="top-of-queue" :topOfQueue="topOfQueue"></top-of-queue>
    </div>
    <div>
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
  padding-left: 1%;
  margin-left: 0px;
}
</style>

