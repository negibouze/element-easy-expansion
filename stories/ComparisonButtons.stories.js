import { storiesOf } from '@storybook/vue';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonButtons from '../src/components/ComparisonButtons.vue';

storiesOf('Comparison of Buttons', module)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      <h3>下記のプロパティが使用できます</h3>
      <div>
        Size: mini / small / medium / wide / xwide / xxwide / large / xlarge / xxlarge / free
        Width: 任意の数字（Sizeがfreeの場合のみ有効）
        Height: 任意の数字（同上）
      </div>
    `
  )(() => {
    return {
      components: { ComparisonButtons },
      props: {
        size: {
          type: String,
          default: text('Size', 'default'),
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
          :size="size"
          :width="width"
          :height="height"
        />
      `,
    }
  })
);
