<template>
  <div>
    <h2>header</h2>
    <div>{{ username }}</div>
    <button @click="changeName">changeName</button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup(props, { attrs, slots, emit }) {
    const username = inject('username', '默认值')
    const changeName = inject('changeName')
    return {
      username,
      changeName
    }
  }
}
</script>

<style scoped>
</style>