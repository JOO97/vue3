<template>
  <div>
    <h3>index</h3>
    <Header />
    <!-- <suspense>
      <template #default>
        <AsyncHeader />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </suspense> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Header from './header.vue'
import Loading from './loading.vue'
// const AsyncHeader = defineAsyncComponent(() => import('./asyncHeader.vue'))

const AsyncHeader = defineAsyncComponent({
  loader: () => import('./asyncHeader.vue'),
  loadingComponent: Loading,
  // errorComponent,
  // 在显示loadingComponent组件之前, 等待多长时间
  delay: 2000,
  /**
   * err: 错误信息,
   * retry: 函数, 调用retry尝试重新加载
   * attempts: 记录尝试的次数
   */
  onError: function (err, retry, attempts) {}
})

export default {
  components: {
    Header,
    AsyncHeader,
    Loading
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped></style>
