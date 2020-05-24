/* tslint:disable */
import axios from 'axios';
import { createActions } from '../../vuex.helpers';
import { RootState } from '..';
// import router from '../../router';
import ProductMutations, { ProductMutation } from './product.mutations';
import { ProductState } from './product.state';
import { Product } from '@/models';

const BASE_URL = 'http://localhost:3000';

export enum ProductAction {
  getProductById = 'PRODUCT/GET_PRODUCT',
}

const actions = createActions<
ProductAction,
  ProductState,
  RootState,
  typeof ProductMutations
>()({
  // async [UserAction.setUser]({ commit }) {
  //   const params = router.currentRoute.query.params;
  //   console.log(params)
  //   commit(UserMutation.setUserType, );
  // },
  async [ProductAction.getProductById]({ commit }, id: string): Promise<Product> {
    const response = await axios.get<Product>(BASE_URL + `/v1/products/${id}`);
    return response.data;
  },
});

export default actions;
