<template>
  <div>plugins</div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  setup(props) {
    //setup中取全局属性
    const current = getCurrentInstance()
    const appName2 = current.appContext.config.globalProperties.$appName2
    console.log(current, appName2)
  },
  mounted() {
    console.log('appName', this.$appName)
  }
}
</script>

<style scoped>
</style>