import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import MyButton from '../src/components/MyButton.vue';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

stories.add('with a button', () => ({
  components: { MyButton },
  template: `
    <my-button @click="action">
      ${text('Label', 'Hello Storybook')}
    </my-button>
  `,
  methods: { action: action('clicked') },
  notes: `
    notes
  `
}));
