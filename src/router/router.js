import { createWebHistory, createRouter } from "vue-router";

const Login = () => import('@/views/Login.vue')

const routes = [
  { path: '/', component: Login, name: 'login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router