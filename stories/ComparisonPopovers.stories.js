import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonPopovers from '../src/components/ComparisonPopovers.vue';
import { PopoverType, PopoverSize } from '../src/components/MyPopover.vue';

const typeLabel = 'Types';
const typeOptions = PopoverType;
const typeDefaultValue = PopoverType.Error;
const type = select(typeLabel, typeOptions, typeDefaultValue)

const sizeLabel = 'Sizes';
const sizeOptions = PopoverSize;
const sizeDefaultValue = PopoverSize.Narrow;
const size = select(sizeLabel, sizeOptions, sizeDefaultValue)

const stories = storiesOf('Comparison of Popovers', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

stories.add('default', () => ({
  components: { ComparisonPopovers },
  template: `
  <comparison-popovers
    type="${type}"
    size="${size}"
  />
  `,
  notes: `
    notes
  `
}));
