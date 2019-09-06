import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

export const homeRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
