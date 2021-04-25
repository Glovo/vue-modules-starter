import { Vue as _Vue } from "vue/types/vue";
import { VueModule } from "vue-modules";
import VueRouter from "vue-router";
import { homeRoutes } from "./router/home-routes";
import { Store } from "vuex";
import { homeStore } from "./store";
import I18n from "vue-i18n";
import { langs } from "./lang";
export class HomeModule implements VueModule {
  readonly name = "home";
  constructor(
    private router: VueRouter,
    private store: Store<any>,
    private i18n: I18n
  ) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(homeRoutes);
    this.store.registerModule([this.name], homeStore);
    for (const lang of Object.keys(this.i18n.messages).sort()) {
      const Messages = langs.get(lang) || {};
      this.i18n.mergeLocaleMessage(lang, Messages);
    }
  }
}
