<template>
  <div>
    <h2>header</h2>
    <div>title: {{ title }} <button @click="onClick">click</button></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['title'])
const emit = defineEmits(['onClick'])

const onClick = () => {
  emit('onClick', 'header')
}
</script>
