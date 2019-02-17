import { storiesOf } from '@storybook/vue';
import { withKnobs, number, radios } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonButtons from '../src/components/ComparisonButtons.vue';

const themeLabel = 'Theme';
const themeOptions = {
  bulma: 'bulma',
  default: 'default',
};
const themeDefaultValue = themeOptions.default;

const typeLabel = 'Type';
const typeOptions = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  text: 'text',
  default: 'default',
};
const typeDefaultValue = typeOptions.default;

const sizeLabel = 'Size';
const sizeOptions = {
  mini: 'mini',
  small: 'small',
  medium: 'medium',
  wide: 'wide',
  xwide: 'xwide',
  xxwide: 'xxwide',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xxlarge',
  free: 'free',
};
const sizeDefaultValue = sizeOptions.mini;

storiesOf('Comparison of Buttons', module)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      <h3>プロパティは下記が使用できます</h3>
      <div>
        Type: primary / success / warning / danger / info / text
        Size: mini / small / medium / wide / xwide / xxwide / large / xlarge / xxlarge / free
        Width: 任意の数字（Sizeがfreeの場合のみ有効）
        Height: 任意の数字（同上）
      </div>
    `
  )(() => {
    return {
      components: { ComparisonButtons },
      props: {
        theme: {
          type: String,
          default: radios(themeLabel, themeOptions, themeDefaultValue),
        },
        type: {
          type: String,
          default: radios(typeLabel, typeOptions, typeDefaultValue),
        },
        size: {
          type: String,
          default: radios(sizeLabel, sizeOptions, sizeDefaultValue),
        },
        width: {
          type: Number,
          default: number('Width', 0),
        },
        height: {
          type: Number,
          default: number('Height', 0),
        },
      },
      template: `
        <comparison-buttons
          :color-theme="theme"
          :type="type"
          :size="size"
          :width="width"
          :height="height"
        />
      `,
    }
  })
);
