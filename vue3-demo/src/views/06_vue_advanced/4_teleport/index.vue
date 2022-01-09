<template>
  <div class="index">
    index
    <teleport to="body">
      <h1>teleport</h1>
    </teleport>
    <teleport to="body">
      <h1>teleport 2</h1>
    </teleport>
    <teleport to="#joo">
      <h1>teleport 3</h1>
    </teleport>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>