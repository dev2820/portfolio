<template id="app">
  <header>
    <global-navigation-bar :anchors="anchor"/>
  </header>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>what</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { anchor } from "@/assets/meta.json"
import HelloWorld from "@/components/HelloWorld.vue";
import GlobalNavigationBar from "./components/GlobalNavigationBar/GlobalNavigationBar.vue";
export default defineComponent({
  components: {
    HelloWorld,
    GlobalNavigationBar,
  },
  setup() {
    return {
      anchor
    }
  }
});
</script>
<style>
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
  color: #2c3e50;
}
body {
  margin:0;
  padding:0;
}
header {
  background:var(--glass-background);
}
</style>
