<template>
  <div class="index">
    <h1>自定义指令</h1>
    <div v-joo>joo</div>
    <input type="text" ref="input" />
    <div v-format-time>1624452193</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup(props) {
    const input = ref(null)
    console.log('index created')
    onMounted(() => {
      console.log('index mounted')
    })

    return {
      input
    }
  },
  directives: {
    joo: {
      created(el, bindings, vNode, preNode) {
        // console.log('v-joo created', el, bindings, vNode, preNode)
      },
      mounted(el) {
        // console.log('v-joo mounted')
        el.focus()
      }
    }
  }
}
</script>
