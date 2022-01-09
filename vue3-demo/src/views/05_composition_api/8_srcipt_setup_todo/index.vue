<template>
  <div>
    <h1>setup 顶层写法</h1>
    <!-- <div @click="changeUser">11{{ user2 }}</div> -->
  </div>
</template>

<script setup>
// https://developer.51cto.com/art/202112/695328.htm
import { ref, provide, readonly } from 'vue'
console.log('xxx')
const user = ref('joo')
const user2 = 'joo'
const changeUser = () => {
  user.value = 'joo1'
}
</script>

<style scoped>
</style>