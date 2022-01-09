<template>
  <div>
    <div>
      <h1>1-useTitle: {{ title }}</h1>
      <button @click="title = 'index2'">change title</button>
    </div>
    <div>-------------------</div>
    <div>
      <h1>2-userMousePosition</h1>
      <div>x:{{ mouseX }}-y:{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { ref, provide, readonly } from 'vue'

import { useTitle, userMousePosition } from './hooks'

export default {
  setup(props) {
    //useTitle
    const title = useTitle('index')

    //userMousePosition
    const { mouseX, mouseY } = userMousePosition()

    return { title, mouseX, mouseY }
  }
}
</script>

<style scoped>
</style>