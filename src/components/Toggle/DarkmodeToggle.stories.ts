import DarkmodeToggle from './DarkmodeToggle.vue';
import { action } from "@storybook/addon-actions"
export default {
  component: DarkmodeToggle,
  title: 'Toggle/DarkmodeToggle',
};

export const Default = (args:any) => ({
  components: { DarkmodeToggle },
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
  template: '<DarkmodeToggle @on="onHandler" @off="offHandler"/>',
});

export const Checked = (args:any) => ({
components: { DarkmodeToggle },
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
template: '<DarkmodeToggle @on="onHandler" @off="offHandler" checked/>',
});