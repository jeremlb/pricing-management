import { createMutations } from '../../vuex.helpers';
import { UserState } from './user.state';
import { User } from '@/models';

export enum UserMutation {
  setUser = 'USER/SET_USER',
}

const mutations = createMutations<
UserState,
UserMutation
>()({
  [UserMutation.setUser](state, value: User | null) {
    state.user = value;
  }
});

export default mutations;
