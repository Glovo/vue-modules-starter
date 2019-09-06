import { ActionTree } from 'vuex'
import { HomeState } from './state'
import { INCREASE_COUNTER, DECREASE_COUNTER } from './action-types'

export const actions: ActionTree<any, HomeState> = {
  [INCREASE_COUNTER]({ commit }) {
    commit(INCREASE_COUNTER)
  },
  [DECREASE_COUNTER]({ commit }) {
    commit(DECREASE_COUNTER)
  }
}
