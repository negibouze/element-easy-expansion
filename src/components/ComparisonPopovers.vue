<template>
  <div class="container">
    <h2>Current Property Type: {{ type }}, Size: {{ size }}</h2>
    <div>
      <h3>My Popover</h3>
      <my-popover
        :type="type"
        :size="size"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <my-button slot="reference">Click to activate</my-button>
      </my-popover>
    </div>
    <div>
      <h3>Element Popover</h3>
      <el-popover
        :type="type"
        :size="size"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <el-button slot="reference">Click to activate</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyButton from './MyButton.vue';
import MyPopover, { PopoverType, PopoverSize } from './MyPopover.vue';

@Component({
  components: {
    MyButton,
    MyPopover,
  },
})
export default class ComparisonPopovers extends Vue {
  // props
  @Prop(String) private type!: PopoverType;
  @Prop(String) private size!: PopoverSize;
}
</script>

<style lang="stylus" scoped>
</style>
