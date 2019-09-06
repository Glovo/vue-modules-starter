import { RouteConfig } from 'vue-router'
const About = () =>
  import(/* webpackChunkName: "about" */ '../views/About.vue')

export const aboutRoutes: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
