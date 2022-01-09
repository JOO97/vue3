<template>
  <div>
    <h1>ref api</h1>
    <div>
      {{ obj }}-{{ name }}
      <button @click="changeObj">changeObj</button>
    </div>
    <div>
      <h2>customRef</h2>
      <input type="text" v-model="text" />
      <p>text:{{ text }}</p>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  toRef,
  isProxy,
  shallowReactive,
  unref,
  shallowRef,
  triggerRef
} from 'vue'
import { useDebounceRef } from './hooks/useDebounceRef'

export default {
  components: {},
  setup(props, { attrs, slots, emit }) {
    //isProxy 判断是否为reactive或readonly创建的proxy
    // const obj = reactive({ name: 'joo' })
    // console.log(isProxy(obj))  //true

    //shadowReactive 浅层响应式对象
    // const obj = shallowReactive({
    //   name: 'joo',
    //   info: {
    //     age: 18
    //   }
    // })

    //toRefs
    // const obj = reactive({ name: 'joo', age: 18 })
    // // const { name, age } = obj //解构的变量是普通变量
    // let { name, age } = toRefs(obj) //转为ref

    //toRef
    // const obj = reactive({ name: 'joo', age: 18 })
    // let name = toRef(obj, 'name')

    //unref 如果是ref对象返回ref.value 否则返回本身
    // const value = unref(ref('a'))

    //shallowRef 创建浅层ref对象
    // const obj = shallowRef({ name: 'joo' })
    // const changeObj = () => {
    //   obj.value.name = 'xxx' //不是响应式
    //   triggerRef(obj) //手动触发
    // }
    const changeObj = () => {}

    //customRef
    const text = useDebounceRef('joo')

    return {
      obj: {},
      changeObj,
      text
    }
  }
}
</script>

<style  scoped>
</style>