<template>
  <div>
    <h1>computed - watch</h1>
    <div>{{ myName }}-{{ age }}-{{ fullStr }}</div>
    <div>
      <input type="text" v-model="value" />
      <button @click="onChange">change</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed, watch, watchEffect } from 'vue'

export default {
  components: {},
  setup(props, { attrs, slots, emit }) {
    const value = ref('')
    const myName = ref('joo')
    const age = ref(18)
    //computed
    // const fullStr = computed(() => myName.value + age.value)
    const fullStr = computed({
      get: () => myName.value + ' ' + age.value,
      set: (newVal) => {
        const arr = newVal.split(' ')
        myName.value = arr[0]
        age.value = arr[1]
      }
    })

    const onChange = () => {
      //   myName.value = value.value
      fullStr.value = 'moon 20'
    }

    return {
      value,
      myName,
      age,
      fullStr,
      onChange
    }
  }
}
</script>

<style  scoped>
</style>