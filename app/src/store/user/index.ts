import { createModule } from '../../vuex.helpers';
import actions from './user.actions';
import getters from './user.getters';
import mutations from './user.mutations';
import state, { UserState } from './user.state';

export { UserState };

export default createModule<UserState>()({
  actions: actions as any,
  getters,
  mutations,
  state,
});
