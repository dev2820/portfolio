import CommonButton from './CommonButton.vue';

export default {
  component: CommonButton,
  title: 'Button/CommonButton',
};

// const Template = (args:any) => ({
//     components: { CommonButton },
//     setup() {
//         const type:string = args;
//         return {
//           type
//         };
//     },
//     template: '<CommonButton>클릭</CommonButton>',
// });

// export const Default = Template.bind({});
// Default({});

export const Default = (args:any) => ({
    components: { CommonButton },
    template: '<CommonButton>클릭</CommonButton>',
});

export const Primary = (args:any) => ({
  components: { CommonButton },
  template: '<CommonButton primary>클릭</CommonButton>',
});