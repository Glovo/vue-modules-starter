import { Vue as _Vue } from "vue/types/vue";
import { VueModule } from "vue-modules";
import I18n from "vue-i18n";
import VueRouter from "vue-router";
import { Store } from "vuex";
import App from "./components/App.vue";
import { Locales } from "./locales";

let en = {};
let ar = {};

const messages = {
  [Locales.EN]: en,
  [Locales.AR]: ar,
};

const defaultLocale = Locales.EN;

export class I18nModule implements VueModule {
  readonly name = "i18n";
  i18n?: I18n;
  install(Vue: typeof _Vue) {
    Vue.use(I18n);

    this.i18n = new I18n({
      messages,
      locale: defaultLocale,
      fallbackLocale: defaultLocale,
    });
  }
}
