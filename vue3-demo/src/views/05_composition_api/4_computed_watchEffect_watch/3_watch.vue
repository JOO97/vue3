<template>
  <div>
    <h1>watch</h1>
    <div>{{ info }}</div>
    <div ref="divRef">
      <input type="text" v-model="value" />
      <button @click="onChange">change</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  components: {},
  setup(props, { attrs, slots, emit }) {
    const value = ref('')
    const info = reactive({
      name: 'joo',
      age: 18
    })
    const arr = reactive([
      {
        name: 'xxx'
      },
      'sss'
    ])
    const divRef = ref(null)

    //1侦听类型
    //1.1 getter函数 引用的必须是响应式对象reactive/ref
    // watch(
    //   () => info.name,
    //   (newVal, oldVal) => {
    //     console.log('n-', newVal, ' o-', oldVal)
    //   }
    // )
    //1.2 reactive/ref对象
    // watch(value, (newVal, oldVal) => {
    //   console.log('n-', newVal, ' o-', oldVal)
    // })

    //2侦听多个数据源
    // watch([value, () => info.name], (newValues, oldValues) => {
    //   console.log(newValues, oldValues)
    // })

    //3侦听对象/数组 需要先解构
    watch(
      //   () => ({ ...info }),
      () => ({ ...arr }),
      (newVal, oldVal) => {
        console.log('n-', newVal, ' o-', oldVal)
      },
      {
        immediate: true,
        deep: true
      }
    )

    const onChange = () => {
      info.name = value.value
      arr[0].name = value.value
      //   stopWatch()
    }

    return {
      value,
      info,
      onChange,
      divRef
    }
  }
}
</script>

<style  scoped>
</style>