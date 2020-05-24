<template>
  <div class="app">
    <router-view class="app__content"/>
  </div>
</template>


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
