<template>
  <div class="cart">
    <div class="cart__creation-date">{{ getFormattedCartCreationDate() }}</div>

    <b-table class="cart__table" bordered hover :items="cartProducts" :fields="fields"></b-table>

    <div class="cart__total-amount">total {{ cartAmount.total }}</div>
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
  data() {
    return {
      fields: [
        { key: 'name', sortable: true, label: 'Product name' },
        { key: 'description', label: 'Description' },
        { key: 'amount', label: 'Price' },
      ]
    }
  },
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

  getFormattedCartCreationDate() {
    const date = new Date(this.cart.createdAt);

    return `${date.toISOString().split('T')[0]} ${date.getHours()}:${date.getMinutes()}`;
  }
}
</script>

<style scoped lang="scss">
.cart {
  border: 1px solid #ced4da;
  padding: 16px;

  &__creation-date {
    text-align: left;
  }

  &__table {
    margin: 32px 0;
  }

  &__total-amount {
    text-align: right;
  }
}
</style>
