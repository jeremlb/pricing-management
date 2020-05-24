import { UserState } from './user.state';

const getters = {
  currentUser: (state: UserState) => state.user,
};

export default getters;
