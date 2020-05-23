import { createMutations } from '../../vuex.helpers';
import { ProductsState } from './products.state';

export enum ProductsMutation {
  setProducts = 'PRODUCTS/SET_PRODUCTS',
}

const mutations = createMutations<
ProductsState,
ProductsMutation
>()({
  [ProductsMutation.setProducts](state, value = []) {
    state.products = value;
  }
});

export default mutations;
