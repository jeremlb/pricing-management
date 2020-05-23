/* tslint:disable */

import { createActions } from '../../vuex.helpers';
import { RootState } from '..';
import router from '../../router';
import ProductsMutations, { ProductsMutation } from './products.mutations';
import { ProductsState } from './products.state';
import { Product } from '@/models';

export enum ProductsAction {
  getProducts = 'PRODUCTS/GET_ALL',
  create = 'PRODUCTS/CREATE',
}

const actions = createActions<
  ProductsAction,
  ProductsState,
  RootState,
  typeof ProductsMutations
>()({
  async [ProductsAction.getProducts]({ commit }) {
    // const params = router.currentRoute.query.params;
    // console.log(params)
    // commit(ProductsMutation.setProducts, products);
  },

  async [ProductsAction.create]({ commit, getters }, payload: Omit<Product, 'id'>) {
    const products = [...getters.products, payload];
    console.log(products);
    commit(ProductsMutation.setProducts, products);
  },
});

export default actions;
