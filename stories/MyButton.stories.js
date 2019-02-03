import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import MyButton from '../src/components/MyButton.vue';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">My Button</my-button>',
    methods: { action: action('clicked') },
  }))
