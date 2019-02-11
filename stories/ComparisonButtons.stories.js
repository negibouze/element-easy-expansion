import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonButtons from '../src/components/ComparisonButtons.vue';

storiesOf('Comparison of Buttons', module)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      <h3>下記のプロパティが使用できます</h3>
      <div>
        Size: mini / small / medium / wide / xwide / xxwide / large / xlarge / xxlarge
      </div>
    `
  )(() => {
    return {
      components: { ComparisonButtons },
      props: {
        size: {
          type: String,
          default: text('Size', 'large'),
        },
      },
      template: `
        <comparison-buttons
          :size="size"
        />
      `,
    }
  })
);
