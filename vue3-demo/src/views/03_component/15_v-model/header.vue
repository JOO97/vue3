<template>
  <div>
    <div>header</div>
    <div>
      input1- {{ value }}
      <input type="text" v-model="value" />
    </div>
    <div>
      input2- {{ value2 }}
      <input type="text" v-model="value2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title2: String
  },
  emits: ['update:modelValue', 'update:title2'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      }
    },
    value2: {
      set(value) {
        this.$emit('update:title2', value)
      },
      get() {
        return this.title2
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
