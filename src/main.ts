import Vue from "vue";
import { RouterModule } from "@/modules/router";
import { StoreModule } from "@/modules/store";
import { I18nModule } from "@/modules/i18n";
import { CoreModule } from "@/modules/core";
import { HomeModule } from "@/modules/home";
import { AboutModule } from "@/modules/about";

function bootstrap() {
  Vue.config.productionTip = false;
  const routerModule = new RouterModule();
  routerModule.install(Vue);

  const storeModule = new StoreModule();
  storeModule.install(Vue);

  const i18nModule = new I18nModule();
  i18nModule.install(Vue);

  const coreModule = new CoreModule(
    routerModule.router!,
    storeModule.store!,
    i18nModule.i18n!
  );
  coreModule.install(Vue);

  const homeModule = new HomeModule(
    routerModule.router!,
    storeModule.store!,
    i18nModule.i18n!
  );
  homeModule.install(Vue);

  const aboutModule = new AboutModule(routerModule.router!, i18nModule.i18n!);
  aboutModule.install(Vue);
}

bootstrap();
