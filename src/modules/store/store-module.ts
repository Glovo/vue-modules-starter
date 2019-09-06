import { Vue as _Vue } from 'vue/types/vue'
import Vuex from 'vuex'
import { VueModule } from 'vue-modules'
import { Store } from 'vuex'

export class StoreModule implements VueModule {
  store?: Store<any>;
  install(Vue: typeof _Vue) {
    Vue.use(Vuex)
    this.store = new Vuex.Store({
      state: {},
      mutations: {},
      actions: {}
    })
  }
}
