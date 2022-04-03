import FolderCard from './FolderCard.vue';

export default {
  component: FolderCard,
  title: 'Button/FolderCard',
};

export const Default = (args:any) => ({
    components: { FolderCard },
    template: '<FolderCard>클릭</FolderCard>',
});

export const Primary = (args:any) => ({
  components: { FolderCard },
  template: '<FolderCard primary>클릭</FolderCard>',
});