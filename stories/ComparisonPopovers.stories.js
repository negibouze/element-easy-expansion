import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonPopovers from '../src/components/ComparisonPopovers.vue';

storiesOf('Comparison of Popovers', module)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      <h3>プロパティは下記が使用できます</h3>
      <div>
        Type: error / info / default
        Size: narrow / default
      </div>
    `
  )(() => {
    return {
      components: { ComparisonPopovers },
      props: {
        type: {
          type: String,
          default: text('Type', 'default'),
        },
        size: {
          type: String,
          default: text('Size', 'default'),
        },
      },
      template: `
        <comparison-popovers
          :type="type"
          :size="size"
        />
      `,
    }
  })
);
