import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'detail',
    component: DetailsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
