<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <my-button size="xxwide">my-button</my-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyButton from './components/MyButton.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    MyButton,
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
