<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <comparison-buttons size="xxwide" />
    </div>
    <div>
      <comparison-popovers :type="popoverType" :size="popoverSize" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComparisonButtons from '../src/components/ComparisonButtons.vue';
import ComparisonPopovers from '../src/components/ComparisonPopovers.vue';
import { PopoverType, PopoverSize } from '../src/components/MyPopover.vue';

@Component({
  components: {
    ComparisonButtons,
    ComparisonPopovers,
  },
})
export default class App extends Vue {
  // computed
  get popoverType(): PopoverType {
    return PopoverType.Error;
  }
  get popoverSize(): PopoverSize {
    return PopoverSize.Narrow;
  }
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
