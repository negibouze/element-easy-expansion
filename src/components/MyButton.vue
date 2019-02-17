<template>
  <el-button
    :type="type"
    :size="size"
    :icon="isPresetIcon ? icon : ''"
    :nativeType="nativeType"
    :loading="loading"
    :disabled="disabled"
    :plain="plain"
    :autofocus="autofocus"
    :round="round"
    :circle="circle"
    :class="{ bulma: theme === 'bulma' }"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum ColorTheme {
  Bulma = 'bulma',
  Default = 'default',
}

@Component
export default class MyButton extends Vue {
  // props
  @Prop(String) private colorTheme!: ColorTheme;
  @Prop(String) private type!: string;
  @Prop(String) private size!: string;
  @Prop(String) private icon!: string;
  @Prop(String) private nativeType!: string;
  @Prop(Boolean) private loading!: boolean;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private plain!: boolean;
  @Prop(Boolean) private autofocus!: boolean;
  @Prop(Boolean) private round!: boolean;
  @Prop(Boolean) private circle!: boolean;
  // computed
  get theme(): ColorTheme {
    return this.colorTheme;
  }
  get isPresetIcon(): boolean {
    return (this.icon || '').startsWith('el-');
  }
  // handler methods
  private handleClick(e: MouseEvent): void {
    this.$emit('click', e);
  }
}
</script>

<style lang="stylus" scoped>
[class*=" el-button-"]
  font-size 14px
  // font-size 1.4rem
  &[class*="small"]
  &[class*="mini"]
    font-size 12px
    // font-size 1.2rem
  &[class*="large"]
    font-size 16.8px
    // font-size 1.68rem

.el-button--free
  padding: 0
.el-button--wide
  padding: 12px 60px
.el-button--xwide
  padding: 12px 120px
.el-button--xxwide
  padding: 12px 180px
.el-button--large
  padding: 0 60px
  height: 48px
.el-button--xlarge
  padding: 0 120px
  height: 48px
.el-button--xxlarge
  padding: 0 180px
  height: 48px

.bulma
  &.el-button--primary
    background-color: #00d1b2
    border-color: #00d1b2
  &.el-button--success
    background-color: #23d160
    border-color: #23d160
  &.el-button--warning
    background-color: #ffdd57
    border-color: #ffdd57
    color: rgba(0, 0, 0, .7)
  &.el-button--danger
    background-color: #ff3860
    border-color: #ff3860
  &.el-button--info
    background-color: #209cee
    border-color: #209cee

.icon
  height: 18px
</style>
