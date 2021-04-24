import { Vue as _Vue } from "vue/types/vue";
import VueRouter from "vue-router";
import I18n from "vue-i18n";
import { Store } from "vuex";

export class pluginsModule {
  static app?: _Vue;
  static i18n?: I18n;
  static store?: Store<any>;
  static router?: VueRouter;

  //   static name = "plugins";

  static install(app: _Vue, router: VueRouter, store: Store<any>, i18n: I18n) {
    this.app = app;
    this.router = router;
    this.store = store;
    this.i18n = i18n;
  }
}
