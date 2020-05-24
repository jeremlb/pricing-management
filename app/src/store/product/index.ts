import { createModule } from '../../vuex.helpers';
import actions from './product.actions';
import getters from './product.getters';
import mutations from './product.mutations';
import state, { ProductState } from './product.state';

export { ProductState };

export default createModule<ProductState>()({
  actions: actions as any,
  getters,
  mutations,
  state,
});
