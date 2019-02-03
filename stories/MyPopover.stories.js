import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import MyPopover from '../src/components/MyPopover.vue';

storiesOf('Popover', module)
  .add('popover', () => ({
    components: { MyPopover },
    template: `
      <my-popover
        placement="bottom"
      >
        <button slot="reference">Click to activate</button>
      </my-popover>
    `,
    methods: { action: action('clicked') },
  }))
