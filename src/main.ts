import Vue from 'vue'
import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { HomeModule } from '@/modules/home'
import { AboutModule } from '@/modules/about'

function bootstrap() {
  Vue.config.productionTip = false
  const routerModule = new RouterModule()
  routerModule.install(Vue)

  const storeModule = new StoreModule()
  storeModule.install(Vue)

  const coreModule = new CoreModule(routerModule.router!, storeModule.store!)
  coreModule.install(Vue)

  const homeModule = new HomeModule(routerModule.router!, storeModule.store!)
  homeModule.install(Vue)

  const aboutModule = new AboutModule(routerModule.router!)
  aboutModule.install(Vue)
}

bootstrap()
