<template>
  <div>
    header left
    <button @click="handleClick">emitter</button>
  </div>
</template>

<script>
import emitter from './utils/eventBus.js'

export default {
  methods: {
    handleClick() {
      console.log(1)
      emitter.emit('on-click', 1)
      emitter.emit('on-click-2', 2)
    }
  }
}
</script>

<style scoped></style>
