import GlobalNavigationBar from './GlobalNavigationBar.vue';

export default {
  component: GlobalNavigationBar,
  title: 'GNB/GlobalNavigationBar',
};

export const Default = (args:any) => ({
  components: { GlobalNavigationBar },
  template: '<GlobalNavigationBar>클릭</GlobalNavigationBar>',
});