<template>
  <div>
    <h1>生命周期</h1>
    <div>age-{{ age }}</div>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

export default {
  setup(props) {
    const age = ref(18)
    onMounted(() => {
      console.log('mounted')
      age.value = 20
    })
    onUpdated(() => {
      console.log('updated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      age
    }
  }
}
</script>

<style scoped>
</style>