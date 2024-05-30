import { createRouter, createWebHistory } from 'vue-router'
import DevPage from '../components/DevPage.vue'
import ProfilePage from '../components/ProfilePage.vue'

const routes = [
  {
    path: '/dev',
    name: 'dev',
    component: DevPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
