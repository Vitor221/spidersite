import { createWebHistory, createRouter } from "vue-router";

const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')

const routes = [
  { path: '/', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router