<template>
  <ul>
    <li v-for="anchor in anchors" :key="anchor">
      <a :href="anchor.link">{{anchor.title}}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import IAnchor from "@/interfaces/IAnchor"
export default defineComponent({
  name: "GlobalNavigationBar",
  props: {
    anchors: {
      type: Array as () => Array<IAnchor>
    }
  },
  setup() {
    return {
      
    };
  },
});
</script>

<style scoped lang="scss">
ul {
  display:inline-flex;
  flex-direction:row;
  list-style:none;
  padding:0;

  li {
    height:2.5rem;
    padding:0 0.75rem;
    text-align:center;
    line-height:2.5rem;
    transition:0.2s;
    border-bottom:0.25rem solid transparent;
    cursor:pointer;
    
    &:hover {
      border-bottom:0.25rem solid var(--primary-500);
    }

    a {
      text-decoration: none;
      color:var(--on-background);
    }
  }
}
</style>