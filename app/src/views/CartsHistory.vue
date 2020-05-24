<template>
  <div class="carts-history">
    {{ carts }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CartAction } from '../store/carts/cart.actions';
import { Cart } from '../models';

@Component({})
export default class CartHistory extends Vue {
  carts: Cart[] = [];

  async beforeMount() {
    this.carts = await this.$store.dispatch(CartAction.getCarts);
  }
}
</script>

<style scoped lang="scss">
</style>
