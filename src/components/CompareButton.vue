<template>
  <div class="container">
    <my-button
      :type="type"
      :size="size"
      @click="handleClick"
    >
      MyButton
    </my-button>
    <el-button
      :type="type"
      :size="size"
      @click="handleClick"
    >
      ElButton
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyButton from './MyButton.vue';

@Component({
  components: {
    MyButton
  }
})
export default class CompareButton extends Vue {
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
