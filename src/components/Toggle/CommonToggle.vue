<template>
  <label class="switch round">
    <input type="checkbox" @change="onClick($event)" :checked="checked" />
    <span class="slider round" />
  </label>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "CommonToggle",
  props: {
    checked: {
      type: Boolean,
      default: false,
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
input {
  display: none;
}
label.switch {
  position: absolute;
  display: inline-block;
  width: 3.5rem;
  height: 1.75rem;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.slider::before {
  position: absolute;
  content: "";
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  left: 0.25rem;
  top: 0.25rem;
  background-color: #ffffff;
  transition: all 0.2s ease;
}
input:checked + .slider {
  background-color: var(--primary-500);
}
input:checked + .slider::before {
  transform: translateX(1.75rem);
}

/* Rounded sliders */
.round {
  border-radius: 17px;
}

.round:before {
  border-radius: 50%;
}
</style>