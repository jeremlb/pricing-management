export interface ProductsState {
  products: any;
}

const productsState: ProductsState = {
  products: [
    { id: '1234', name: 'Rateau à gazon', price: 12.2 },
    { id: '4567', name: 'Pelle', price: 10.99 },
    { id: '9014', name: 'Beche', price: 15.99 },
    { id: '9583', name: 'Tracteur', description: 'Beau tracteur de la marque John Deer', price: 15000 },
  ],
};

export default productsState;
