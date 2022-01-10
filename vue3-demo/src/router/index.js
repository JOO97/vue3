import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/05_composition_api'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)', //路径被解析为字符串
    // path: '/:pathMatch(.*)*', //路径被解析为数组
    component: () =>
      import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
