import CloudCard from './CloudCard.vue';
export default {
  component: CloudCard,
  title: 'Card/CloudCard',
};

export const Default = (args:any) => ({
    components: { CloudCard },
    setup() {
      return {
        
      }
    },
    template: '<CloudCard title="Address" subtitle="Seoul in Korea" link="">클릭</CloudCard>',
});