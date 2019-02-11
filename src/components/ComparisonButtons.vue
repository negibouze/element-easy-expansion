<template>
  <div class="container">
    <div>
      <h3>My Button</h3>
      <my-button
        :type="type"
        :size="size"
        @click="handleClick"
      >
        MyButton
      </my-button>
    </div>
    <div>
      <h3>Element Button</h3>
      <el-button
        :type="type"
        :size="size"
        @click="handleClick"
      >
        ElButton
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyButton from './MyButton.vue';

@Component({
  components: {
    MyButton,
  },
})
export default class ComparisonButtons extends Vue {
  // props
  @Prop(String) private type!: string;
  @Prop(String) private size!: string;
  // handler methods
  private handleClick(e: MouseEvent) {
    console.log(e);
  }
}
</script>

<style lang="stylus" scoped>
</style>
