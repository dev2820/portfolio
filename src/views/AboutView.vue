<template>
  <section id="about">
    <div class="introduce">
      <strong>{{firstLine}}</strong>
      {{message}}
    </div>
    <ProfileCard class="profile-image" :profile="profileImg"/>
  </section>
</template>

<script lang="ts">
import ArrowButton from "@/components/Button/ArrowButton.vue";
import ProfileCard from "@/components/Profile/ProfileCard.vue";
import { defineComponent,ref,toRef, } from "vue";
import {introduce, profileImg, firstLine } from "@/assets/meta.json"
export default defineComponent({
  name: "AboutView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    }
  },
  components: {ArrowButton,ProfileCard},
  setup(props) {
    const goNextHandler = () => {
      window.location.href = "#about"
    }
    const isDarkmodeRef = toRef(props,'isDarkmode')
    return {
      firstLine:firstLine,
      message:introduce,
      goNextHandler,
      isDarkmodeRef,
      profileImg
    };
  },
});
</script>
<style lang="scss" scoped>
#about {
  position:relative;
  height:1024px;
  width:1000px;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  & > * {
    margin:auto 0;
  };
  div.introduce {
    width:400px;
    height:500px;
    font-size:var(--xl);
  }
  .profile-image {
    position:relative;
  }
}
</style>

