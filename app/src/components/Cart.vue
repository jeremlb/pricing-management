<template>
  <div class="cart">
    <p>creation date {{ cart.createdAt }}</p>

    {{ cartProducts }}

    <p>total {{ cartAmount.total }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Cart, CartAmount, Product, CartAmountItem } from '../models';
import { ProductAction } from '../store/product/product.actions';
import { CartAction } from '../store/carts/cart.actions';

interface CartProduct {
  id: string;
  name: string;
  description: string;
  amount: number;
}

@Component({
  props: {
    cart: { type: Object, required: true },
  }
})
export default class CartComponent extends Vue {
  readonly cart!: Cart;
  private cartAmount: CartAmount = {} as any;
  private cartProducts: CartProduct[] = [];

  async mounted() {
    this.cartAmount = await this.$store.dispatch(CartAction.getCartAmount, this.cart.id);

    for (let i = 0; i < this.cart.items.length; i++) {
      const productId = this.cart.items[i].productId;
      const amountItem: CartAmountItem = this.cartAmount.items.find(item => item.productId === productId);
      const { id, name, description } = await this.$store.dispatch(ProductAction.getProductById, productId);
      this.cartProducts.push({ id, name, description, amount: amountItem.amount });
    }
  }
}
</script>

<style scoped lang="scss">
</style>
