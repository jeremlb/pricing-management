import { createModule } from '../../vuex.helpers';
import actions from './cart.actions';
import getters from './cart.getters';
import mutations from './cart.mutations';
import state, { CartState } from './cart.state';

export { CartState };

export default createModule<CartState>()({
  actions: actions as any,
  getters,
  mutations,
  state,
});
