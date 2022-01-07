<template>
  <div>
    <Header :title="title" @on-click="handleClick" />
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
      title: 'xxxx'
    }
  },
  methods: {
    handleClick(...args) {
      // console.log('click', args)
    }
  }
}
</script>

<style scoped></style>
