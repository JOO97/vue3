<template>
  <div>
    <h1>composition api</h1>
    <p>
      {{ state.title }}
    </p>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <p>{{ title2 }}</p>
    <p>{{ obj2.title2 }}</p>
    <p>{{ obj3.title2 }}</p>
    <button @click="handleChange">change</button>
    <div>-------------------------------------</div>
    <div>readonly: {{ state1.name }}-{{ state1.age }}</div>
    <div>readonly - reactive: {{ state2.name }}-{{ state2.age }}</div>
    <div>reactiveInfo: {{ reactiveInfo.name }}-{{ reactiveInfo.age }}</div>
    <div>-------------------------------------</div>
    <div>
      <Header :title="title2" @on-click="handleClickHeader" :info="state2" />
    </div>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue'
import Header from './header.vue'

export default {
  components: {
    Header
  },
  setup(props, { attrs, slots, emit }) {
    let title = 'set up'

    //reactive
    let state = reactive({
      title: 'reactive'
    })
    //ref 浅层解包
    const title2 = ref('ref title')
    const obj2 = {
      title2
    }
    const obj3 = reactive({
      title2
    })

    const handleChange = () => {
      state.title = 'xxx'
      title2.value = 'xxx'
      //   state1.age = 2 不能修改readonly返回的对象
      info.age = 2 //可以修改readonly使用的原对象，并且是响应式的
    }

    const handleClickHeader = (n) => {
      console.log('emit', n)
    }

    //readonly
    //普通对象
    const info = {
      name: 'joo',
      age: 1
    }
    const state1 = readonly(info)

    //reactive
    const reactiveInfo = reactive(info)
    const state2 = readonly(reactiveInfo)
    console.log('state2', state2)
    //ref

    return {
      title,
      state,
      title2,
      obj2,
      obj3,
      state1,
      state2,
      reactiveInfo,
      handleChange,
      handleClickHeader
    }
  }
}
</script>

<style  scoped>
</style>