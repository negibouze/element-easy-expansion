<template>
  <el-popover
    v-model="visible"
    :trigger="trigger"
    :title="title"
    :content="content"
    :width="width"
    :placement="placement"
    :disabled="disabled"
    :offset="offset"
    :transition="transition"
    :visible-arrow="visibleArrow"
    :popper-options="popperOptions"
    :popper-class="`${popperClass} ${additionalTypeClass} ${additionalSizeClass}`"
    :open-delay="openDelay"
  >
    <slot></slot>
    <template slot="reference"><slot name="reference"></slot></template>
  </el-popover>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from 'vue-property-decorator';

export enum PopoverType {
  Error = 'error',
  Info = 'info',
  Default = 'default',
}
export enum PopoverSize {
  Narrow = 'narrow',
  Default = 'default',
}

@Component
export default class RnPopover extends Vue {
  // props
  @Prop(Boolean) private value!: boolean;
  @Prop({ type: String, default: 'click' }) private trigger!: string;
  @Prop(String) private title!: string;
  @Prop(String) private content!: string;
  @Prop([String, Number]) private width!: string|number;
  @Prop({ type: String, default: 'bottom' }) private placement!: string;
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  @Prop({ type: Number, default: 0 }) private offset!: number;
  @Prop({ type: String, default: 'fade-in-linear' }) private transition!: string;
  @Prop({ type: Boolean, default: true }) private visibleArrow!: boolean;
  @Prop({
    type: Object,
    default: () => {
      return { boundariesElement: 'body', gpuAcceleration: false };
    },
  })
  private popperOptions!: { [key: string]: any };
  @Prop(String) private popperClass!: string;
  @Prop(Number) private openDelay!: number;
  @Prop({ type: String, default: PopoverType.Default }) private type!: PopoverType;
  @Prop({ type: String, default: PopoverSize.Default }) private size!: PopoverSize;
  // computed
  get visible(): boolean {
    return this.value;
  }
  set visible(newVal: boolean) {
    if (this.value !== newVal) {
      this.$emit('input', newVal);
    }
  }
  get additionalTypeClass(): string {
    switch (this.type) {
      case PopoverType.Error:
        return 'error';
      case PopoverType.Info:
        return 'info';
      default:
        return '';
    }
  }
  get additionalSizeClass(): string {
    switch (this.size) {
      case PopoverSize.Narrow:
        return 'narrow';
      default:
        return '';
    }
  }
}
</script>

<style lang="stylus">
$color-error = #f56c6c
$window-color-error = mix(#fff, $color-error, 90%);
$border-color-error = mix(#fff, $color-error, 80%)
$color-info = #6c6cf5
$window-color-info = mix(#fff, $color-info, 90%);
$border-color-info = mix(#fff, $color-info, 80%)

.el-popover
  &.narrow
    padding: 10px 20px
  &.error
    border-color: $border-color-error
    background-color: $window-color-error
    color: $color-error
    &[x-placement^=top]
      .popper__arrow::after 
        border-top-color: $window-color-error
    &[x-placement^=right]
      .popper__arrow::after 
        border-right-color: $window-color-error
    &[x-placement^=bottom]
      .popper__arrow::after 
        border-bottom-color: $window-color-error
    &[x-placement^=left]
      .popper__arrow::after 
        border-left-color: $window-color-error
  &.info
    border-color: $border-color-info
    background-color: $window-color-info
    color: $color-info
    &[x-placement^=top]
      .popper__arrow
        border-top-color: $border-color-info
        &::after 
          border-top-color: $window-color-info
    &[x-placement^=right]
      .popper__arrow
        border-right-color: $border-color-info
        &::after 
          border-right-color: $window-color-info
    &[x-placement^=bottom]
      .popper__arrow
        border-bottom-color: $border-color-info
        &::after 
          border-bottom-color: $window-color-info
    &[x-placement^=left]
      .popper__arrow
        border-left-color: $border-color-info
        &::after 
          border-left-color: $window-color-info
</style>
