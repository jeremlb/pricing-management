/* tslint:disable */

import { createActions } from '../../vuex.helpers';
import { RootState } from '..';
// import router from '../../router';
import UserMutations, { UserMutation } from './user.mutations';
import { UserState } from './user.state';
import { User } from '@/models';

export enum UserAction {
  setUser = 'USER/SET_USER',
}

const actions = createActions<
  UserAction,
  UserState,
  RootState,
  typeof UserMutations
>()({
  // async [UserAction.setUser]({ commit }) {
  //   const params = router.currentRoute.query.params;
  //   console.log(params)
  //   commit(UserMutation.setUserType, );
  // },
  async [UserAction.setUser]({ commit }, userType: User | null) {
    commit(UserMutation.setUser, userType);
  },
});

export default actions;
