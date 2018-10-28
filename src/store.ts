import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface AppState {
  message: string;
}

export default new Vuex.Store<AppState>({
  state: {
    message: '123',
  },
  mutations: {
    update(state: AppState, message: string) {
      state.message = message;
    },
  },
  actions: {
  },
});
