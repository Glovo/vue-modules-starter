import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import App from './components/App.vue'

export class CoreModule implements VueModule {
  readonly name = 'core'
  constructor(private router: VueRouter, private store: Store<any>) {}
  install(Vue: typeof _Vue) {
    new Vue({
      router: this.router,
      store: this.store,
      render: h => h(App)
    }).$mount('#app')
  }
}
