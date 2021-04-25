import { Vue as _Vue } from "vue/types/vue";
import { VueModule } from "vue-modules";
import VueRouter from "vue-router";
import { aboutRoutes } from "./router/about-routes";
import I18n from "vue-i18n";
import { langs } from "./lang";

export class AboutModule implements VueModule {
  readonly name = "about";
  constructor(private router: VueRouter, private i18n: I18n) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(aboutRoutes);
    // for (const lang of this.i18n.availableLocales)
    for (const lang of Object.keys(this.i18n.messages).sort()) {
      const Messages = langs.get(lang) || {};
      this.i18n.mergeLocaleMessage(lang, Messages);
    }
  }
}
