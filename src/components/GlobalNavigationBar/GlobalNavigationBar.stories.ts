import GlobalNavigationBar from './GlobalNavigationBar.vue';
import {anchor} from './GlobalNavigationBar.mock.json';
import IAnchor from '@/interfaces/IAnchor';
export default {
  component: GlobalNavigationBar,
  title: 'GNB/GlobalNavigationBar',
};

export const Default = (args:any) => ({
  components: { GlobalNavigationBar },
  setup() {
    const anchors:IAnchor[] = anchor;
    return {anchors};
  },
  template: '<GlobalNavigationBar :anchors="anchors">클릭</GlobalNavigationBar>',
});

export const Header = (args:any) => ({
  components: { GlobalNavigationBar },
  setup() {
    const anchors:IAnchor[] = anchor;
    const headerStyle = {
      width:"100%",
      textAlign:"center",
      background:"var(--glass-background)"
    }
    return {anchors,headerStyle};
  },
  template: `
  <header :style="headerStyle">
    <GlobalNavigationBar :anchors="anchors">클릭</GlobalNavigationBar>
  </header>`,
});