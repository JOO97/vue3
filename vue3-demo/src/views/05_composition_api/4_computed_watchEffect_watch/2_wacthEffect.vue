<template>
  <div>
    <h1>watchEffect: 自动收集响应式的依赖</h1>
    <div>{{ info }}</div>
    <div ref="divRef">
      <input type="text" v-model="value" />
      <button @click="onChange">change</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'

export default {
  components: {},
  setup(props, { attrs, slots, emit }) {
    const value = ref('')
    const info = ref({
      name: 'joo',
      age: 18
    })
    const divRef = ref(null)

    //默认立即执行一次 返回停止监听函数
    //watchEffect在dom挂在前执行
    const stopWatch = watchEffect(
      (onInvalidate) => {
        console.log('divRef', divRef.value)
        //   console.log('obj', info.value) //不是深度监听
        //   console.log('obj', info.value.name)
        //请求接口
        //onInvalidate 当副作用即将重新执行或侦听器被停止时执行 可以执行一些清除工作
        onInvalidate(() => {
          //执行该回调时，取消上一次的请求
          console.log('onInvalidate')
        })
      },
      {
        flush: 'post' //默认pre
      }
    )
    watchEffect(() => {
      console.log('watchEffect2 obj', info.value.name)
    })

    const onChange = () => {
      info.value.name = value.value
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