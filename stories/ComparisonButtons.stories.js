import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ComparisonButtons from '../src/components/ComparisonButtons.vue';

const stories = storiesOf('Comparison of Buttons', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

stories.add('default', () => ({
  components: { ComparisonButtons },
  template: `
    <comparison-buttons
      size="${text('Size', 'large')}"
    />
  `,
  notes: `
    notes
  `
}));
