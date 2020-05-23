<template>
  <div class="products">
  <b-nav align="right">
    <b-nav-item :to="{ name: 'add-product' }">Add product</b-nav-item>
  </b-nav>
    <b-table
      show-empty
      small
      stacked="md"
      :items="products"
      :fields="fields"
    >
      <template v-slot:cell(price)="row">
        $ {{ row.value }}
      </template>

      <template v-slot:cell(actions)="row">
        <b-dropdown  size="sm" right text="..." no-caret>
          <b-dropdown-item @click="setSales(row.item)">Set sales</b-dropdown-item>
          <b-dropdown-item @click="deleteSales(row.item)">Delete sales</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="deleteProduct(row.item)">Delete</b-dropdown-item>
        </b-dropdown>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '../models';
import { mapGetters } from 'vuex';
import { ProductsAction } from '../store/products/products.actions';

@Component({
  data () {
    return {
        fields: [
          { key: 'id', label: 'Id' },
          { key: 'name', label: 'Product name' },
          { key: 'description', label: 'Description', class: 'text-center' },
          { key: 'price', label: 'Price', class: 'text-left' },
          { key: 'actions', label: 'Actions' },
        ],
    }
  },
  computed: { ...mapGetters(['products', 'currentUser']) },
})
export default class Login extends Vue {
  readonly products!: Product[];

  async beforeMount() {
    await this.$store.dispatch(ProductsAction.getProducts);
  }

  setSales(_item: Product) {}
  deleteSales(_item: Product) {}
  deleteProduct(_item: Product) {}
}
</script>

<style scoped lang="scss">
</style>
