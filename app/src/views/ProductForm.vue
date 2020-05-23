<template>
  <div class="add-product">

    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Product name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          max="50"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Product description:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="description"
          placeholder="Enter description"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Price:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          min="0"
          v-model="price"
          placeholder="Enter price"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Create</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '../models';
import { mapGetters } from 'vuex';
import { ProductsAction } from '../store/products/products.actions';

@Component({
  computed: { ...mapGetters([]) },
})
export default class Login extends Vue {
  name: string = '';
  description?: string = '';
  price: number | null = null;

  async onSubmit(event: Event) {
    event.preventDefault();
    await this.$store.dispatch(ProductsAction.create, { name: this.name, description: this.description, price: this.price });
    await this.$router.push({ name: 'products' });
  }

  onReset(event: Event) {
    event.preventDefault();
    this.name = '';
    this.description = '';
    this.price = null;
  }
}
</script>

<style scoped lang="scss">
</style>
