import { INCREASE_COUNTER, DECREASE_COUNTER } from './action-types'
import { HomeState } from './state'

export const mutations = {
  [INCREASE_COUNTER](state: HomeState) {
    ++state.counter
  },
  [DECREASE_COUNTER](state: HomeState) {
    --state.counter
  }
}