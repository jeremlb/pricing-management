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
  async [CartAction.getCarts]({}, queries: any = {}): Promise<Cart[]> {
    let url = BASE_URL + '/v1/carts?';

    if (queries.from && queries.to) {
      url += `from=${queries.from}&to=${queries.to}`;
    }

    const response = await axios.get<Cart[]>(url);
    return response.data;
  },
  async [CartAction.getCartAmount]({}, id: string): Promise<CartAmount> {
    const response = await axios.get<CartAmount>(BASE_URL + `/v1/carts/${id}/amount`);
    return response.data;
  },
});

export default actions;
