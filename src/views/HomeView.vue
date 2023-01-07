<template>
  <section id="home">
    <img class="cloud small" src="@/assets/myCloud.webp" />
    <img class="cloud big" src="@/assets/myCloud.webp" />
    <img
      class="sun big"
      :class="{ appear: !isDarkmodeRef }"
      src="@/assets/mySun.webp"
    />
    <img
      class="moon big"
      :class="{ appear: isDarkmodeRef }"
      src="@/assets/myMoon.webp"
    />
    <img class="character" src="@/assets/myCharacter.webp" />
    <p class="greeting" :class="{ show: showAfter300 }">{{ home.greeting }}</p>
    <p class="job" :class="{ show: showAfter1000 }">
      <font>{{ home.position }}</font> {{ home.job }}
    </p>
    <p class="name" :class="{ show: showAfter1700 }">
      <font>{{ home.name }}</font> {{ home.iam }}
    </p>
    <ArrowButton
      class="go-next"
      :direction="'bottom'"
      :guideMessage="'Go Next'"
      @click="goNextHandler"
    />
  </section>
</template>

<script lang="ts">
import ArrowButton from "@/components/Button/ArrowButton.vue";
import { defineComponent, ref, toRef, onMounted, watch } from "vue";
import { home as homeKR } from "@/i18n/meta.ko.json";
import { home as homeEN } from "@/i18n/meta.en.json";
import language from "@/store/language";
export default defineComponent({
  name: "BannerView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    },
  },
  components: { ArrowButton },
  setup(props) {
    const goNextHandler = () => {
      const url = window.location.href;
      window.location.href = "#about";
      window.history.replaceState(null, "", url);
    };
    const isDarkmodeRef = toRef(props, "isDarkmode");
    const showAfter300 = ref(false);
    const showAfter1000 = ref(false);
    const showAfter1700 = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showAfter300.value = true;
      }, 300);
      setTimeout(() => {
        showAfter1000.value = true;
      }, 1000);
      setTimeout(() => {
        showAfter1700.value = true;
      }, 1700);
    });
    const home = ref(homeKR);
    watch(language.lang, (newLang) => {
      if (newLang === "ko-KR") {
        home.value = homeKR;
      } else {
        home.value = homeEN;
      }
    });
    return {
      home,
      goNextHandler,
      isDarkmodeRef,
      showAfter300,
      showAfter1000,
      showAfter1700,
    };
  },
});
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  height: 1024px;
  width: 100%;
  .cloud {
    position: absolute;
    &.small {
      left: -100px;
      top: 160px;
      width: 360px;
      height: 240px;
      animation: flow-left 30s infinite linear;
    }
    &.big {
      right: -200px;
      top: 600px;
      width: 450px;
      height: 300px;
      animation: flow-right 35s infinite linear;
    }
  }
  .sun,
  .moon {
    position: absolute;
    right: 40px;
    top: -640px;
    width: 320px;
    transition: 0.6s;
    &.appear {
      transform: translateY(640px);
    }
  }
  .character {
    position: absolute;
    height: 500px;
    width: 500px;
    animation: floating 3s infinite ease-in;
  }
  p {
    user-select: none;
    position: absolute;
    font-weight: var(--bold);
    text-align: left;
    margin: 0;
    z-index: 10;
    opacity: 0;
    transition: 1s;
    &.job {
      transform: translateY(calc(var(--6xl) * 1.375));
    }
    &.name {
      transform: translateY(calc(var(--6xl) * 2.75));
    }
    font {
      color: var(--primary-700);
    }
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      height: 100%;
      width: 0%;
      transition: 0.3s ease-in;
      background: var(--primary-700);
      opacity: 0.3;
    }
    &:hover {
      font {
        transition: 0.3;
      }
      &:before {
        width: 100%;
      }
    }
    &.show {
      opacity: 1;
    }
  }
  .go-next {
    position: absolute;
    bottom: 9rem;
    width: 9rem;
    height: 9rem;
    left: 50%;
    margin-left: -4.5rem;
  }
}
@media (min-width: 1000px) {
  .character {
    left: 464px;
    top: 226px;
  }
  p {
    left: 108px;
    top: 360px;
    font-size: var(--6xl);
    &.job {
      transform: translateY(calc(var(--6xl) * 1.375));
    }
    &.name {
      transform: translateY(calc(var(--6xl) * 2.75));
    }
  }
}
@media (min-width: 758px) and (max-width: 999px) {
  .character {
    right: -4rem;
    top: 124px;
  }
  p {
    left: 108px;
    top: 360px;
    font-size: var(--6xl);
    &.job {
      transform: translateY(calc(var(--6xl) * 1.375));
    }
    &.name {
      transform: translateY(calc(var(--6xl) * 2.75));
    }
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  .character {
    display: none;
  }
  p {
    left: 20px;
    top: 360px;
    font-size: var(--5xl);
    &.job {
      transform: translateY(calc(var(--5xl) * 1.375));
    }
    &.name {
      transform: translateY(calc(var(--5xl) * 2.75));
    }
  }
}
@keyframes flow-right {
  0% {
    transform: translate(0rem);
  }
  50% {
    transform: translate(6.25rem);
  }
  100% {
    transform: translate(0px);
  }
}
@keyframes flow-left {
  0% {
    transform: translate(0px);
  }
  50% {
    transform: translate(-6.25rem);
  }
  100% {
    transform: translate(0px);
  }
}
@keyframes floating {
  0% {
    transform: rotate(12deg) translateY(0px);
  }
  50% {
    transform: rotate(12deg) translateY(-0.25rem);
  }
  100% {
    transform: rotate(12deg) translateY(0px);
  }
}
</style>
