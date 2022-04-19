<template>
  <div class="profile">
    <div class="background"></div>
    <div class="profile-image" data-aos="flip-right" data-aos-duration="500">
      <img @error="noImage($event)" :src="profile"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import noProfile from "@/assets/noProfile.png"
import profile from "@/assets/profile.jpg";
export default defineComponent({
  name: "ProfileCard",
  emits: ["on", "off"],
  setup(props, { emit }) {
    props = reactive(props);
    const noImage = (evt:Event):void => {
      const target = evt.target as HTMLImageElement
      target.src = noProfile;
    }
    return {
      noImage,
      profile
    };
  },
});
</script>

<style scoped lang="scss">
div.profile {
  display:inline-block;
  & > * {
    position:absolute;
    border-radius: 1rem;
  }
  div.background {
    background:var(--primary-500);
  }
  div.profile-image {
    left:0;
    top:0;
    box-shadow:var(--card-box-shadow);
    display:flex;
    justify-content: center;
    overflow:hidden;
    img {
      filter:sepia(60%);
      text-align: center;
    }
  }
}
@media (min-width: 758px) {
  div.profile {
    width:448px;
    height:548px;
  }
  div.profile-image {
    width:400px;
    height:500px;
  }
  div.background {
    width:400px;
    height:500px;
    left:48px;
    top:48px;
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  div.profile {
    width:336px;
    height:411px;
  }
  div.profile-image {
    width:336px;
    height:375px;
  }
  div.background {
    width:336px;
    height:375px;
    left:24px;
    top:24px;
  }
}
</style>