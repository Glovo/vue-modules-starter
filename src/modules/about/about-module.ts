import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { aboutRoutes } from './router/about-routes'

export class AboutModule implements VueModule {
  readonly name = 'about'
  constructor(private router: VueRouter) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(aboutRoutes)
  }
}
