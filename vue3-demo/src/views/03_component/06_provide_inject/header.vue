<template>
  <div>
    header-{{ appName }}
    <header-left />
  </div>
</template>

<script>
import HeaderLeft from './headerLeft.vue'
export default {
  components: {
    HeaderLeft
  },
  inject: ['appName'],
  methods: {}
}
</script>

<style scoped></style>
