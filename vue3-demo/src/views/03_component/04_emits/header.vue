<template>
  <div @click="handleClick">child-{{ title }}</div>
</template>

<script>
export default {
  props: ['title'],
  // emits: ['onClick'],
  emits: {
    // onChange: null,
    onClick: (...args) => {
      console.log('emits', args, args.length)
      if (!args.length) return false
      return true
    }
  },
  methods: {
    handleClick() {
      this.$emit('onClick', 1, 2)
    }
  }
}
</script>

<style scoped></style>
