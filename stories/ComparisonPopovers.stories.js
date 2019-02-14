import { storiesOf } from '@storybook/vue';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonPopovers from '../src/components/ComparisonPopovers.vue';

const typeLabel = 'Type';
const typeOptions = {
  error: 'error',
  info: 'info',
  default: 'default',
};
const typeDefaultValue = typeOptions.default;

const sizeLabel = 'Size';
const sizeOptions = {
  narrow: 'narrow',
  default: 'default',
};
const sizeDefaultValue = sizeOptions.default;

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
          default: radios(typeLabel, typeOptions, typeDefaultValue),
        },
        size: {
          type: String,
          default: radios(sizeLabel, sizeOptions, sizeDefaultValue),
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
