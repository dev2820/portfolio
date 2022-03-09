<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "CommonButton",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
});
</script>

<style>
</style>