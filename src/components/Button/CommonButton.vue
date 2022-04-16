<template>
  <button :class="{ primary: isPrimary ? true : false }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "CommonButton",
  props: {
    primary: Boolean,
  },
  setup(props) {
    props = reactive(props);
    const isPrimary = toRef(props, "primary");
    return {
      isPrimary,
    };
  },
});
</script>

<style scoped lang="scss">
button {
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 0.75rem;
  // font-weight:bold;
  font-size:1rem;
  background-color: var(--button-background);
  filter: var(--drop-shadow);
  box-shadow: var(--button-inner-shadow);
  cursor: pointer;

  &.primary {
    background: var(--primary-linear-gradient);
    box-shadow: var(--primary-inner-shadow);
  }
  &:hover {
    background: var(--primary-linear-gradient);
    box-shadow: var(--primary-inner-shadow);
  }
}
</style>