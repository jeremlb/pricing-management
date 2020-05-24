import { User } from '@/models';

export interface UserState {
  user: User | null;
}

const userState: UserState = {
  user: null,
};

export default userState;
