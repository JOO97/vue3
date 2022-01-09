<template>
  <div>
    <h2>header</h2>
    <button @click="handleClick">
      {{ title }}
    </button>
    <div>header: {{ info.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: Object
  },
  emits: ['onClick'],
  setup(props, { attrs, slots, emit }) {
    // console.log('header', props, attrs, slots, emit)
    const handleClick = () => {
      //   props.info.name = 'xxx'
      emit('onClick', 'joo')
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
</style>