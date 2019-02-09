<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <compare-button size="xxwide" />
    </div>
  </div>
</template>

<script>
import CompareButton from './components/CompareButton.vue';

export default {
  name: 'app',
  components: {
    CompareButton,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
