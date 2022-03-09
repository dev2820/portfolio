import CommonButton from './CommonButton.vue';

export default {
  component: CommonButton,
  title: 'Button/CommonButton',
};

const Template = (args:any) => ({
    components: { CommonButton },
    setup() {
        return {};
    },
    template: '<CommonButton>클릭</CommonButton>',
});

export const Default = Template.bind({});
Default({});