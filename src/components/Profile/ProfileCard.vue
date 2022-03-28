<template>
  <div class="profile">
    <div class="background"></div>
    <img @error="noImage($event)" :src="profile"/>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import noProfile from "@/assets/noProfile.png"
export default defineComponent({
  name: "ProfileCard",
  props: {
    profile: {
      type: String,
      default: "",
    },
  },
  emits: ["on", "off"],
  setup(props, { emit }) {
    props = reactive(props);
    const noImage = (evt:Event):void => {
      const target = evt.target as HTMLImageElement
      target.src = noProfile;
    }
    return {
      noImage
    };
  },
});
</script>

<style scoped lang="scss">
div.profile {
  width:448px;
  height:548px;
  display:inline-block;
  & > * {
    position:absolute;
    border-radius: 1rem;
  }
  img {
    left:0;
    top:0;
    width:400px;
    height:500px;
    filter:sepia(60%);
    box-shadow:var(--card-box-shadow);
  }
  div.background {
    width:400px;
    height:500px;
    left:48px;
    top:48px;
    background:var(--primary-500);
  }

}
</style>