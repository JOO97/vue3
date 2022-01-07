<template>
  <div>header left -{{ appName }}</div>
  <!-- <div>header left -{{ appName.value }}</div> -->
</template>

<script>
export default {
  inject: ['appName']
}
</script>

<style scoped></style>
