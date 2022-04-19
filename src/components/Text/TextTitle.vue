<template>
  <div class="title">
    <span class="square">
    </span>
    <h2>
      <slot/>
    </h2>
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
    background:var(--primary-500);
  }
  h2 {
    margin:0;
    margin-left:24px;
    display:inline-block;
  }
}
.round {
  border-radius:1rem;
}
@media (min-width: 758px) {
  h2 {
      font-size:var(--5xl);
  }
  .square {
    width:var(--5xl);
    height:var(--5xl);
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  h2 {
      font-size:var(--4xl);
  }
  .square {
    width:var(--4xl);
    height:var(--4xl);
  }
}
</style>