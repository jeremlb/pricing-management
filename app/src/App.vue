<template>
  <div class="app">
    <b-navbar toggleable="lg" type="dark" variant="primary" v-if="currentUser">
      <b-navbar-brand href="#">Pricing Management</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'products'}">Products</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'cart'}" right><b-icon icon="cart4"></b-icon></b-nav-item>
          <b-nav-item :to="{ name: 'login'}" right>Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view class="app__content"/>
  </div>
</template>

<script lang="ts">
import Login from '@/components/Login.vue'

import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { User } from './models';

@Component({
  components: { Login },
  computed: { ...mapGetters(['currentUser']) },
})
export default class App extends Vue {
  readonly currentUser!: User;

  mounted() {
    if (!this.currentUser) {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style lang="scss">

@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &__content {
    margin: auto;
    max-width: 1200px;
  }
}
</style>
