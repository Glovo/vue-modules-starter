import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { homeRoutes } from './router/home-routes'

export class HomeModule implements VueModule {
  constructor(private router: VueRouter) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes)
  }
}
