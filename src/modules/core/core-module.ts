import { Vue as _Vue } from "vue/types/vue";
import { VueModule } from "vue-modules";
import VueRouter from "vue-router";
import { Store } from "vuex";
import I18n from "vue-i18n";
import App from "./components/App.vue";

export class CoreModule implements VueModule {
  readonly name = "core";
  constructor(
    private router: VueRouter,
    private store: Store<any>,
    private i18n: I18n
  ) {}
  install(Vue: typeof _Vue) {
    new Vue({
      router: this.router,
      store: this.store,
      i18n: this.i18n,
      render: (h) => h(App),
    }).$mount("#app");
  }
}
