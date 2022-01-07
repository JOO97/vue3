<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from './header.vue'
import emitter from './utils/eventBus.js'

export default {
  components: {
    Header
  },
  data() {
    return {}
  },
  created() {
    emitter.on('on-click', (n) => {
      console.log('emitter', n)
    })
    emitter.on('*', (type, info) => {
      console.log('* listener:', type, info)
    })
  },
  methods: {}
}
</script>

<style scoped></style>
