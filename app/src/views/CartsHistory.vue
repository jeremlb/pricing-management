<template>
  <div class="carts-history">
    <cart-component v-for="cart of carts" v-bind:key="cart.id" :cart="cart" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CartAction } from '../store/carts/cart.actions';
import { Cart } from '../models';

import CartComponent from '../components/Cart.vue';

@Component({ components: { CartComponent }})
export default class CartHistory extends Vue {
  carts: Cart[] = [];

  async beforeMount() {
    this.carts = await this.$store.dispatch(CartAction.getCarts);
  }
}
</script>

<style scoped lang="scss">
</style>
