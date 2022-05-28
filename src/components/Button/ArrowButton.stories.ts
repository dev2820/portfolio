import ArrowButton from './ArrowButton.vue';

export default {
  component: ArrowButton,
  title: 'Button/ArrowButton',
};

// const Template = (args:any) => ({
//     components: { ArrowButton },
//     setup() {
//         const type:string = args;
//         return {
//           type
//         };
//     },
//     template: '<ArrowButton>클릭</ArrowButton>',
// });

// export const Default = Template.bind({});
// Default({});

export const Default = (args: any) => ({
  components: { ArrowButton },
  template: '<ArrowButton >클릭</ArrowButton>',
});

export const Primary = (args: any) => ({
  components: { ArrowButton },
  template: '<ArrowButton primary>클릭</ArrowButton>',
});