<template>
  <div class="cart-date-picker">
    <span>Display all carts starting from</span> 
    <b-form-datepicker class="cart-date-picker__picker" v-model="from" @input="fromChanged()"></b-form-datepicker>
    <span>until {{ to}}</span>
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
    this.$emit('changed', { from: this.from, to: this.to });
  }

  fromChanged() {
    this.to = '';
  }

  toChanged() {
    this.$emit('changed', { from: this.from, to: this.to });
  }
}
</script>

<style scoped lang="scss">
</style>
