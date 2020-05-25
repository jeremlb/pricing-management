<template>
  <div class="cart-date-picker">
    <span>Display all carts starting from</span> 
    <b-form-datepicker class="cart-date-picker__picker" v-model="from" @input="fromChanged()"></b-form-datepicker>
    <span>until</span>
    <b-form-datepicker class="cart-date-picker__picker" :min="from" v-model="to" @input="toChanged()"></b-form-datepicker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class CartDatePicker extends Vue {
  from: string = '2020-01-01';
  to: string = new Date().toISOString();

  mounted() {
    this.toChanged();
  }

  fromChanged() {
    this.to = '';
  }

  toChanged() {
    const from = `${new Date(this.from).toISOString().split('T')[0]}T00:00:00Z`;
    const to = `${new Date(this.to).toISOString().split('T')[0]}T23:59:59Z`;
    this.$emit('changed', { from, to });
  }
}
</script>

<style scoped lang="scss">
.cart-date-picker {
  display: flex;
  align-items: center;
  justify-content: left;

  &__picker {
    width: 350px;
    margin: 0 8px;
  }
}
</style>
