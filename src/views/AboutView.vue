<template>
  <section id="about">
    <TextTitle icon="user-circle">About me</TextTitle>
    <article class="content">
      <div class="introduce" data-aos="fade-right">
        <strong>{{about.firstLine}}</strong>
        {{about.introduce}}
      </div>
      <ProfileCard class="profile-image" :profile="about.profileImg"/>
    </article>
  </section>
</template>

<script lang="ts">
import ArrowButton from "@/components/Button/ArrowButton.vue";
import ProfileCard from "@/components/Card/ProfileCard.vue";
import TextTitle from "@/components/Text/TextTitle.vue";
import { defineComponent,ref,toRef, } from "vue";
import { about } from "@/assets/meta.json"
export default defineComponent({
  name: "AboutView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    }
  },
  components: {ArrowButton,ProfileCard,TextTitle},
  setup(props) {
    const goNextHandler = () => {
      window.location.href = "#about"
    }
    const isDarkmodeRef = toRef(props,'isDarkmode')
    return {
      about,
      goNextHandler,
      isDarkmodeRef,
    };
  },
});
</script>
<style lang="scss" scoped>
#about {
  padding:80px 0;
  height:100%;
  width:1000px;
  .content {
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    & > * {
      margin:auto 0;
    };
    div.introduce {
      width:440px;
      font-size:var(--xl);
      color:var(--secondary-text);
      line-height:2rem;
      strong {
        color:var(--regular-text);
        font-size:var(--2xl);
      }
    }
    .profile-image {
      position:relative;
    }
  }
}

</style>

