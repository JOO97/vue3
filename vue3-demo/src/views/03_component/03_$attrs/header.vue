<template>
  <div>child</div>
  <div v-bind="$attrs">child</div>
  <div
    :class="$attrs.class"
    :style="$attrs.style"
    :id="$attrs.id"
    :child-data="$attrs['child-data']"
  >
    child{{ $attrs }}
  </div>
</template>

<script>
export default {
  inheritAttrs: false //根节点不继承
}
</script>

<style scoped></style>
