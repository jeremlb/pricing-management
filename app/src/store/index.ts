import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router';
import productsModule, { ProductsState } from './products';
import userModule, { UserState } from './user';

Vue.use(Vuex)

export interface RootState {
  route: Router;
  products: ProductsState;
  users: UserState;
}

export const store = new Vuex.Store<RootState>({
  modules: {
    products: productsModule,
    users: userModule,
  },
});
