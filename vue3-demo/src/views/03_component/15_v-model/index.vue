<template>
  <div>
    <h3>index</h3>
    <div>title-{{ title }}</div>
    <div>title2-{{ title2 }}</div>
    <!-- <input type="text" :value="title" @input="title = $event.target.value" /> -->
    <!-- <input type="text" v-model="title" />
     -->
    <Header v-model="title" v-model:title2="title2" />
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      title: 'index',
      title2: 'index2'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped></style>
