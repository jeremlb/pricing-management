import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router';
import cartsModule, { CartState } from './carts';
import productModule, { ProductState } from './product';

Vue.use(Vuex)

export interface RootState {
  route: Router;
  products: ProductState,
  carts: CartState;
}

export const store = new Vuex.Store<RootState>({
  modules: {
    carts: cartsModule,
    products: productModule,
  },
});
