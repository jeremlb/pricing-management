/* tslint:disable */
import axios from 'axios';
import { createActions } from '../../vuex.helpers';
import { RootState } from '..';
// import router from '../../router';
import CartMutations, { CartMutation } from './cart.mutations';
import { CartState } from './cart.state';
import { Cart, CartAmount } from '@/models';

const BASE_URL = 'http://localhost:3000';

export enum CartAction {
  getCarts = 'CART/GET_CARTS',
  getCartAmount = 'CART/GET_CART_AMOUNT'
}

const actions = createActions<
CartAction,
  CartState,
  RootState,
  typeof CartMutations
>()({
  // async [UserAction.setUser]({ commit }) {
  //   const params = router.currentRoute.query.params;
  //   console.log(params)
  //   commit(UserMutation.setUserType, );
  // },
  async [CartAction.getCarts]({}): Promise<Cart[]> {
    const response = await axios.get<Cart[]>(BASE_URL + '/v1/carts');
    return response.data;
  },
  async [CartAction.getCartAmount]({}, id: string): Promise<CartAmount> {
    const response = await axios.get<CartAmount>(BASE_URL + `/v1/carts/${id}/amount`);
    return response.data;
  },
});

export default actions;
