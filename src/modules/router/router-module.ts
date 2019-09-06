import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import App from './components/App.vue'

export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: Router;
  install(Vue: typeof _Vue) {
    Vue.use(Router)

    this.router = new Router({
      mode: 'history',
      base: process.env.BASE_URL
    })
  }
}
