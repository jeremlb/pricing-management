import { createMutations } from '../../vuex.helpers';
import { ProductState } from './product.state';

export enum ProductMutation {}

const mutations = createMutations<
ProductState,
ProductMutation
>()({});

export default mutations;
