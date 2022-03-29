<template>
  <div class="title">
    <span class="square">
    </span>
    <h3>
      <slot/>
    </h3>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "CommonToggle",
  props: {
    icon: {
      type: String,
    },

  },
  emits: ["on", "off"],
  setup(props, { emit }) {
    props = reactive(props);
    const onClick = (evt: Event) => {
      const target = evt.target as HTMLInputElement;
      const isChecked = target.checked;
      if (isChecked) {
        emit("on");
      } else {
        emit("off");
      }
    };
    return {
      onClick,
    };
  },
});
</script>

<style scoped lang="scss">
.title {
  display:flex;
  margin-bottom:64px;
  .square {
    display:inline-block;
    margin:auto 0;
    width:64px;
    height:64px;
    background:var(--primary-500);
  }
  h3 {
    margin:0;
    margin-left:24px;
    font-size: var(--6xl);
    display:inline-block;
  }
}
.round {
  border-radius:1rem;
}
</style>