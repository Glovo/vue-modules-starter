import { GetterTree } from 'vuex';
import { HomeState } from './state';

export const GET_COUNTER = 'GET_COUNTER'
export const getters: GetterTree<any, HomeState> = {
  [GET_COUNTER]: (state: HomeState) => state.counter
}
