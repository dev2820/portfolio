<template id="app">
  <select id="langOption" @change="handleLanguageChange">
    <option value="ko-KR" :selected="lang === 'ko-KR'">KR</option>
    <option value="en-EN" :selected="lang === 'en-EN'">EN</option>
  </select>
  <span class="darkmode-toggle">
    <darkmode-toggle
      class="darkmode-toggle"
      :checked="isDarkmodeRef"
      @on="darkmodeHandler(true)"
      @off="darkmodeHandler(false)"
    />
  </span>
  <header>
    <global-navigation-bar :anchors="anchor" />
  </header>
  <main>
    <HomeView :isDarkmode="isDarkmodeRef"></HomeView>
    <AboutView />
    <SkillsAndToolsView />
    <ProjectsView />
    <ContactView />
  </main>
  <footer>
    <ArrowButton
      class="go-top"
      :direction="'top'"
      :guideMessage="'Go Top'"
      @click="goTopHandler"
    />
    <p>ⓒ 2022 <strong>dev2820</strong> All rights reserved.</p>
    <br /><br />
    <cite class="source">
      [일러스트 출처]<br /><br />
      <a
        href="https://www.figma.com/community/file/890095002328610853/SALY---3D-Illustration-Pack"
        >https://www.figma.com/community/file/890095002328610853/SALY---3D-Illustration-Pack</a
      ><br />
      <a
        href="https://www.figma.com/community/file/1030350068466019692/3dicons---Open-source-3D-icon-library"
        >https://www.figma.com/community/file/1030350068466019692/3dicons---Open-source-3D-icon-library</a
      ><br />
    </cite>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { anchor, contact } from "@/assets/meta.json";
import GlobalNavigationBar from "./components/GlobalNavigationBar/GlobalNavigationBar.vue";
import DarkmodeToggle from "./components/Toggle/DarkmodeToggle.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import SkillsAndToolsView from "./views/SkillsAndToolsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactView from "./views/ContactView.vue";
import AOS from "aos";
import language from "@/store/language";
import ArrowButton from "@/components/Button/ArrowButton.vue";
export default defineComponent({
  components: {
    GlobalNavigationBar,
    DarkmodeToggle,
    HomeView,
    AboutView,
    SkillsAndToolsView,
    ProjectsView,
    ContactView,
    ArrowButton,
  },
  setup() {
    const mode = window.localStorage.getItem("isDarkmode");
    if (!!mode) {
      // 저장된 다크모드 여부
      document.documentElement.setAttribute("color-mode", mode);
    } else {
      // 저장된 다크모드 여부가 없다면
      let isOsDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute(
        "color-mode",
        isOsDarkMode ? "dark" : "light"
      );
    }
    const isDarkmodeRef = ref(
      document.documentElement.getAttribute("color-mode") === "dark"
    );
    watch(isDarkmodeRef, (newVal) => {
      document.documentElement.setAttribute(
        "color-mode",
        newVal ? "dark" : "light"
      );
      localStorage.setItem("isDarkmode", newVal ? "dark" : "light");
    });

    const handleLanguageChange = (
      evt: Event | { target: { value: string } }
    ) => {
      const target = evt.target as { value: string };
      if (!target) return;

      const newLang = target.value as string;
      language.changeLang(newLang);
    };

    AOS.init();
    return {
      anchor,
      contact,
      darkmodeHandler: (isOn: boolean): void => {
        if (isOn) {
          isDarkmodeRef.value = true;
        } else {
          isDarkmodeRef.value = false;
        }
      },
      goTopHandler: () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
      isDarkmodeRef,
      handleLanguageChange,
      lang: language.lang,
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/css/color.css";
@import "@/assets/css/font.css";
@import "@/assets/css/icon.css";
@import "@/assets/css/effect.css";
@import "@/assets/css/mixin";

html {
  scroll-behavior: smooth;
  background: var(--background);
}
@media (min-width: 1000px) {
  main {
    max-width: 1200px;
  }
}
@media (min-width: 758px) and (max-width: 999px) {
  main {
    max-width: 758px;
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  main {
    max-width: 335px;
  }
}

#app {
  font-family: "Nanum Gothic", "Noto Sans KR", Times, Times New Roman, Georgia,
    serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-display: swap;
  text-align: center;
  background: var(--background);
  color: var(--regular-text);
  word-break: break-word;
  width: 100%;
  overflow: hidden;
  *::selection {
    background: var(--primary-500);
    color: var(--on-primary);
  }
  transition: 0.3s;
}

body {
  width: 100%;
  margin: 0;
  header {
    background: var(--glass-background);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    z-index: 100;
    transition: 0.3s;
    backdrop-filter: var(--glass-drop-shadow);
    &:hover {
      background: var(--glass-background-variant);
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    margin: 0 auto;
  }
  footer {
    box-sizing: border-box;
    height: 500px;
    width: 100%;
    padding: 1rem;
    background: var(--ground);
    border-top: 1rem solid var(--grass);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .go-top {
      width: 9rem;
      height: 9rem;
      margin: 2rem auto;
    }
  }
}
#langOption {
  width: 60px;
  height: 30px;
  background-color: transparent;
  color: var(--onSurface);
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:focus {
    outline: none;
    background-color: var(--primary-500);
    color: var(--on-primary);
  }
  option {
    background-color: var(--primary-500);
    color: var(--on-primary);
  }
}
.darkmode-toggle {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 100;
}
a {
  text-decoration: none;
  color: var(--onSurface);
}
</style>
