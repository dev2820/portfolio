import CommonToggle from './CommonToggle.vue';
import { action } from "@storybook/addon-actions"
export default {
  component: CommonToggle,
  title: 'Toggle/CommonToggle',
};

export const Default = (args:any) => ({
    components: { CommonToggle },
    setup() {
        const onHandler = () => {
          action("toggle on")
        };
        const offHandler = () => {
          action("toggle off")
        };
        return {
          onHandler,
          offHandler
        };
    },
    template: '<CommonToggle @on="onHandler" @off="offHandler"/>',
});

export const Checked = (args:any) => ({
  components: { CommonToggle },
  setup() {
      const onHandler = () => {
        action("toggle on")
      };
      const offHandler = () => {
        action("toggle off")
      };
      return {
        onHandler,
        offHandler
      };
  },
  template: '<CommonToggle @on="onHandler" @off="offHandler" checked/>',
});