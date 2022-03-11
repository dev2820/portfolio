<template id="app">
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>what</p>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
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
  margin-top: 60px;
}
</style>
