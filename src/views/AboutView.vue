<template>
  <section id="about">
    <TextTitle icon="user-circle">About me</TextTitle>
    <article class="content">
      <div class="introduce" data-aos="fade-right">
        <strong>{{ about.firstLine }}</strong>
        {{ about.introduce }}
      </div>
      <ProfileCard class="profile-image" />
    </article>
  </section>
</template>

<script lang="ts">
import ProfileCard from "@/components/Card/ProfileCard.vue";
import TextTitle from "@/components/Text/TextTitle.vue";
import { defineComponent, ref, toRef, watch } from "vue";
import { about as aboutKR } from "@/i18n/meta.ko.json";
import { about as aboutEN } from "@/i18n/meta.en.json";
import language from "@/store/language";
export default defineComponent({
  name: "AboutView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    },
  },
  components: { ProfileCard, TextTitle },
  setup(props) {
    const goNextHandler = () => {
      window.location.href = "#about";
    };
    const isDarkmodeRef = toRef(props, "isDarkmode");
    const about = ref(aboutKR);
    watch(language.lang, (newLang) => {
      if (newLang === "ko-KR") {
        about.value = aboutKR;
      } else {
        about.value = aboutEN;
      }
    });
    return {
      about,
      goNextHandler,
      isDarkmodeRef,
    };
  },
});
</script>
<style lang="scss" scoped>
@media (min-width: 758px) and (max-width: 999px) {
  #about {
    .content {
      flex-direction: column-reverse;
      .profile-image {
        margin: 0 auto 4rem auto;
      }
      .introduce {
        margin: 0 auto;
      }
    }
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  #about {
    .content {
      flex-direction: column-reverse;
      .profile-image {
        margin: 0 auto 4rem auto;
      }
      .introduce {
        margin: 0 auto;
      }
    }
  }
}
#about {
  padding: 80px 0;
  height: 100%;
  width: 100%;
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    & > * {
      margin: auto 0;
    }
    div.introduce {
      max-width: 440px;
      font-size: var(--xl);
      color: var(--secondary-text);
      line-height: 2rem;
      strong {
        color: var(--regular-text);
        font-size: var(--2xl);
      }
    }
    .profile-image {
      position: relative;
    }
  }
}
</style>
