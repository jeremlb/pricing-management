<template>
  <div class="carts-history">
    <cart-date-picker-component @changed="selectedPeriodChanged($event)"/>
    <cart-component v-for="cart of carts" v-bind:key="cart.id" :cart="cart" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CartAction } from '../store/carts/cart.actions';
import { Cart } from '../models';

import CartDatePickerComponent from '../components/CartDatePicker.vue';
import CartComponent from '../components/Cart.vue';

@Component({ components: { CartDatePickerComponent, CartComponent }})
export default class CartHistory extends Vue {
  carts: Cart[] = [];

  async selectedPeriodChanged(event: any) {
    this.carts = await this.$store.dispatch(CartAction.getCarts, { from: event.from, to: event.to });
  }
}
</script>

<style scoped lang="scss">
</style>
