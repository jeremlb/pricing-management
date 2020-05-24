import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router';
import cartsModule, { CartState } from './carts';

Vue.use(Vuex)

export interface RootState {
  route: Router;
  carts: CartState;
}

export const store = new Vuex.Store<RootState>({
  modules: {
    carts: cartsModule,
  },
});
