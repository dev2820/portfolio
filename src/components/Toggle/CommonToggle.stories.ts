import CommonToggle from './CommonToggle.vue';
import { action } from "@storybook/addon-actions"
export default {
  component: CommonToggle,
  title: 'Toggle/CommonToggle',
};

const Template = (args:any) => ({
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

export const Default = Template.bind({});
Default({});