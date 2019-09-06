import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { homeRoutes } from './router/home-routes'
import { Store } from 'vuex';
import { homeStore } from './store';

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: VueRouter, private store: Store<any>) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes)
    this.store.registerModule([this.name], homeStore)
  }
}
