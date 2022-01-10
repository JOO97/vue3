<template>
  <div>
    <h1>script setup</h1>
    <div>{{ title }}-{{ user }}</div>
    <button @click="user = 'joo2'">change user</button>
    <div>-----------------</div>
    <Header @on-click="handleHeaderClick" :title="user" />
  </div>
</template>

<script setup>
import Header from './header.vue'
import { ref } from 'vue'
const title = ref('xxx')
const user = ref('joo')
const changeUser = () => {
  user.value = 'joo1'
}
const handleHeaderClick = (value) => {
  console.log('index', value)
}
</script>
