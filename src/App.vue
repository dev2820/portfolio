<template id="app">
  <span class="darkmode-toggle">
    <darkmode-toggle class="darkmode-toggle" :checked="isOsDarkmode" @on="darkmodeHandler(true)" @off="darkmodeHandler(false)"/>
  </span>
  <header>
    <global-navigation-bar :anchors="anchor"/>
  </header>
  <main>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <p>what</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { anchor } from "@/assets/meta.json"
import HelloWorld from "@/components/HelloWorld.vue";
import GlobalNavigationBar from "./components/GlobalNavigationBar/GlobalNavigationBar.vue";
import DarkmodeToggle from "./components/Toggle/DarkmodeToggle.vue";
export default defineComponent({
  components: {
    HelloWorld,
    GlobalNavigationBar,
    DarkmodeToggle
  },
  setup() {
    const darkmodeHandler = (isOn:boolean):void => {
      if(isOn) {
        document.documentElement.setAttribute('color-mode','dark');
      }
      else {
        document.documentElement.setAttribute('color-mode','light');
      }
    }
    const isOsDarkmode:boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return {
      anchor,
      darkmodeHandler,
      isOsDarkmode
    }
  }
});
</script>
<style lang="scss">

@import url("@/assets/css/color.css");
@import url("@/assets/css/font.css");
@import url("@/assets/css/icon.css");
@import url("@/assets/css/effect.css");

#app {
  font-family: "Nanum Gothic", "Noto Sans KR", Times, Times New Roman, Georgia,
    serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:var(--background);
  color:(--on-background);
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
  }
  main {
    padding-top:100px;
  }
}
.darkmode-toggle{
  position:fixed;
  right:1rem;
  bottom:1rem;
  margin-top:2rem;
}


</style>
