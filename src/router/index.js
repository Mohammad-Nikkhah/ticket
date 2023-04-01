import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/airline',
    name: 'airline',
    component: () => import('../views/AirlineView.vue')
  },
  {
    path: '/tour',
    name: 'tour',
    component: () => import('../views/TourView.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/HotelView.vue')
  },
  {
    path: '/airlinein',
    name: 'airlinein',
    component: () => import('../views/AirlineinView.vue')
  },
  {
    path: '/train',
    name: 'train',
    component: () => import('../views/TrainView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
