import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import CompareButton from '../src/components/CompareButton.vue';

const stories = storiesOf('CompareButton', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

stories.add('with a button', () => ({
  components: { CompareButton },
  template: `
    <compare-button
      type="${text('Type', 'primary')}"
      size="${text('Size', 'large')}"
    />
  `,
  notes: `
    notes
  `
}));
