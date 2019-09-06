import { Module } from 'vuex'
import { HomeState, initialState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const homeStore: Module<any, HomeState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
