import { createMutations } from '../../vuex.helpers';
import { CartState } from './cart.state';

export enum CartMutation {}

const mutations = createMutations<
CartState,
CartMutation
>()({});

export default mutations;
