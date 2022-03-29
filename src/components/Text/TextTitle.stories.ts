import TextTitle from './TextTitle.vue';
import { action } from "@storybook/addon-actions"
export default {
  component: TextTitle,
  title: 'Text/TextTitle',
};

export const Default = (args:any) => ({
    components: { TextTitle },
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
    template: '<TextTitle>About me</TextTitle>',
});