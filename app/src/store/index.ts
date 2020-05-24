import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router';
import userModule, { UserState } from './carts';

Vue.use(Vuex)

export interface RootState {
  route: Router;
  carts: UserState;
}

export const store = new Vuex.Store<RootState>({
  modules: {
    carts: userModule,
  },
});
