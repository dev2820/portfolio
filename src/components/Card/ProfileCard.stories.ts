import ProfileCard from '../Card/ProfileCard.vue';
import { action } from "@storybook/addon-actions"
import dummy from "@/assets/dummy_profile.png"
export default {
  component: ProfileCard,
  title: 'Profile/ProfileCard',
};

export const Default = (args:any) => ({
    components: { ProfileCard },
    setup() {
        const profile = dummy;
        return {
          profile
        };
    },
    template: '<ProfileCard :profile="profile"/>',
});

export const NoProfile = (args:any) => ({
  components: { ProfileCard },
  template: '<ProfileCard/>',
});