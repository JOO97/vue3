<template>
  <div>
    <Header :slot-name="slotName">
      <template v-slot:content>
        <div>index slot</div>
      </template>
      <template #[slotName]>
        <div>index slot 2</div>
      </template>
      <template #default="scope">
        <p>{{ scope.item }}</p>
        <p>{{ scope.index }}</p>
      </template>
      <template #list="scope">
        <ul>
          <li v-for="item in scope.list" :key="item">{{ item }}</li>
        </ul>
      </template>
    </Header>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      slotName: 'xxx'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped></style>
