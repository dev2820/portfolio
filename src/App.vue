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
  </main>
</template>

<script lang="ts">
import { defineComponent,ref,watch } from "vue";
import { anchor } from "@/assets/meta.json"
import HelloWorld from "@/components/HelloWorld.vue";
import GlobalNavigationBar from "./components/GlobalNavigationBar/GlobalNavigationBar.vue";
import DarkmodeToggle from "./components/Toggle/DarkmodeToggle.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
export default defineComponent({
  components: {
    HelloWorld,
    GlobalNavigationBar,
    DarkmodeToggle,
    HomeView,
    AboutView
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
    })
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
}
#app {
  font-family: "Nanum Gothic", "Noto Sans KR", Times, Times New Roman, Georgia,
    serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:var(--background);
  color:var(--text-color);
  transition:0.3s;
}
body {
  margin:0;
  padding:0;
  header {
    background:var(--glass-background);
    position:fixed;
    width:100%;
    height:5rem;
    display:flex;
    justify-content: center;
    z-index:100;
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
}


</style>
