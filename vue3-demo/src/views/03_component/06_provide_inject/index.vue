<template>
  <div>
    {{ appName }}
    <Header />
    <button @click="appName = 'joo'">change app name</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import Header from './header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      appName: 'xxx'
    }
  },
  provide() {
    return {
      appName: computed(() => {
        //加入响应式
        return this.appName
      })
    }
  },
  methods: {}
}
</script>

<style scoped></style>
