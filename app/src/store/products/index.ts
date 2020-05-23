import { createModule } from '../../vuex.helpers';
import actions from './products.actions';
import getters from './products.getters';
import mutations from './products.mutations';
import state, { ProductsState } from './products.state';

export { ProductsState };

export default createModule<ProductsState>()({
  actions: actions as any,
  getters,
  mutations,
  state,
});
