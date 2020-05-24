<template>
  <div class="login">
    coucou
    <button @click="logAs('user')">Log as user</button>
    <button @click="logAs('admin')">Log as admin</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { UserAction } from '../store/user/user.actions';
import { UserType } from '../models';
import { mapGetters } from 'vuex';

@Component({
  computed: { ...mapGetters([]) },
})
export default class CartHistory extends Vue {
  async beforeMount() {
    await this.$store.dispatch(UserAction.setUser, null);
  }

  async logAs(userType: UserType) {
    await this.$store.dispatch(UserAction.setUser, { type: userType });
    await this.$router.push({ name: 'products' });
  }
}
</script>

<style scoped lang="scss">
</style>
