
<script>
import { h } from 'vue'
export default {
  props: ['counter'],
  render() {
    return h('div', null, [
      h('h2', null, 'header'),
      this.$slots.default
        ? this.$slots.default({ name: 'joo' })
        : h('div', null, 'header default'),
      h('h3', null, `header props: ${this.counter}`)
    ])
  }
}
</script>

<style scoped>
</style>