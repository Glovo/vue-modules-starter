declare module 'vue-modules' {
  import { Vue as _Vue } from 'vue/types/vue'

  export interface VueModule<T = Record<string, any>> {
    readonly name: string
    install(Vue: typeof _Vue): void;
    install(Vue: typeof _Vue, options: T): void;
  }
}
