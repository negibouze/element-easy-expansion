<template>
  <div class="container">
    <h2>Current Property Type: {{ type }}, Size: {{ size }}</h2>
    <div>
      <h3>My Button</h3>
      <my-button
        :color-theme="colorTheme"
        :type="type"
        :size="size"
        :style="additionalStyles"
        @click="handleClick"
      >
        MyButton
      </my-button>
    </div>
    <div>
      <h3>Element Button</h3>
      <el-button
        :color-theme="colorTheme"
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
  @Prop(String) private colorTheme!: string;
  @Prop(String) private type!: string;
  @Prop(String) private size!: string;
  @Prop(Number) private width!: number;
  @Prop(Number) private height!: number;
  // computed
  get additionalStyles() {
    const styles: { [key: string]: any } = {};
    if (this.size !== 'free') {
      return styles;
    }
    if (this.width) {
      styles.width = `${this.width}px`;
    }
    if (this.height) {
      styles.height = `${this.height}px`;
    }
    return styles;
  }
  // handler methods
  private handleClick(e: MouseEvent) {
    console.log(e);
  }
}
</script>

<style lang="stylus" scoped>
</style>
