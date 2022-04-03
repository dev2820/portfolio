import TranslucentCard from './TranslucentCard.vue';

export default {
  component: TranslucentCard,
  title: 'Button/TranslucentCard',
};

export const Default = (args:any) => ({
    components: { TranslucentCard },
    template: '<TranslucentCard>클릭</TranslucentCard>',
});

export const Primary = (args:any) => ({
  components: { TranslucentCard },
  template: '<TranslucentCard primary>클릭</TranslucentCard>',
});