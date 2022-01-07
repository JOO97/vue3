<template>
  <div>
    <div>header</div>
    <div>
      <h3>slot 1</h3>
      <slot name="content"> <div>xxxx</div> </slot>
    </div>
    <div>
      <h3>slot 2</h3>
      <slot :name="slotName"> <div>xxxx</div> </slot>
    </div>
    <div>
      <h3>slot 3</h3>
      <template v-for="item in list" :key="item">
        <slot :item="item" :index="index"></slot>
      </template>
    </div>
    <div>
      <h3>slot 4</h3>
      <slot name="list" :list="list">
        <template v-for="item in list" :key="item">
          <span>{{ item }}</span>
        </template>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slotName'],
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  methods: {}
}
</script>

<style scoped></style>
