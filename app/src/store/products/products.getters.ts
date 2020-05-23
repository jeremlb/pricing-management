import { ProductsState } from './products.state';

const getters = {
  products: (state: ProductsState) => state.products,
};

export default getters;
