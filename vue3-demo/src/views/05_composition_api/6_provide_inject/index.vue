<template>
  <div>
    <h1>生命周期-{{ username }}</h1>
    <div><button @click="username = 'joo1'">change</button></div>
    <Header />
  </div>
</template>

<script>
import { ref, provide, readonly } from 'vue'
import Header from './header.vue'

export default {
  components: {
    Header
  },
  setup(props) {
    const username = ref('joo')
    const changeName = () => {
      username.value = 'update joo'
    }
    provide('username', readonly(username))
    provide('changeName', changeName)

    return {
      username
    }
  }
}
</script>

<style scoped>
</style>