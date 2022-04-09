<template id="app">
  <span class="darkmode-toggle">
    <darkmode-toggle class="darkmode-toggle" :checked="isDarkmodeRef" @on="darkmodeHandler(true)" @off="darkmodeHandler(false)"/>
  </span>
  <header>
    <global-navigation-bar :anchors="anchor"/>
  </header>
  <main>
    <HomeView :isDarkmode="isDarkmodeRef"></HomeView>
    <AboutView/>
    <SkillsAndToolsView/>
    <ProjectsView/>
    <ContactView/>
  </main>
</template>

<script lang="ts">
import { defineComponent,ref,watch } from "vue";
import { anchor } from "@/assets/meta.json"
import GlobalNavigationBar from "./components/GlobalNavigationBar/GlobalNavigationBar.vue";
import DarkmodeToggle from "./components/Toggle/DarkmodeToggle.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import SkillsAndToolsView from "./views/SkillsAndToolsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactView from "./views/ContactView.vue";
export default defineComponent({
  components: {
    GlobalNavigationBar,
    DarkmodeToggle,
    HomeView,
    AboutView,
    SkillsAndToolsView,
    ProjectsView,
    ContactView
  },
  setup() {
    const isDarkmodeRef = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const darkmodeHandler = (isOn:boolean):void => {
      if(isOn) {
        isDarkmodeRef.value = true;
      }
      else {
        isDarkmodeRef.value = false;
      }
    }
    watch(isDarkmodeRef,(newVal)=>{
      document.documentElement.setAttribute('color-mode',newVal?'dark':'light');
    });
    return {
      anchor,
      darkmodeHandler,
      isDarkmodeRef
    }
  }
});
</script>
<style lang="scss">

@import url("@/assets/css/color.css");
@import url("@/assets/css/font.css");
@import url("@/assets/css/icon.css");
@import url("@/assets/css/effect.css");
html {
  scroll-behavior: smooth;
  width:100%;
  background:var(--background);
}
#app {
  font-family: "Nanum Gothic", "Noto Sans KR", Times, Times New Roman, Georgia,
    serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:var(--background);
  color:var(--regular-text);
  transition:0.3s;
}
body {
  width:100%;
  margin:0;
  header {
    background:var(--glass-background);
    position:fixed;
    top:0;
    width:100%;
    height:5rem;
    display:flex;
    justify-content: center;
    z-index:100;
    transition:0.3s;
    backdrop-filter:var(--glass-drop-shadow);
    &:hover {
      background:var(--glass-background-variant);
    }
  }
  main {
    display:flex;
    flex-direction:column;
    align-items: center;
  }
}
.darkmode-toggle{
  position:fixed;
  right:1rem;
  bottom:1rem;
  margin-top:2rem;
  z-index:100;
}
a {
  text-decoration: none;
  color: var(--onSurface);
}

</style>
