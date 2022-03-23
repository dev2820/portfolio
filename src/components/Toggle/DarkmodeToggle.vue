<template>
  <label class="switch round">
    <input type="checkbox" @change="onClick($event)" :checked="checked" />
    <span class="slider round" />
    <img src="@/assets/png/sun.png" class="icon sun"/>
    <img src="@/assets/png/moon.png" class="icon moon"/>
  </label>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "DarkmodeToggle",
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

label.switch {
  display: inline-block;
  width: 3.5rem;
  height: 1.75rem;
  input {
    display: none;
  }
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--on-dark);
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
  background-color: var(--on-light);
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

/* Dark light icon */
.icon {
  position:absolute;
  width:24px;
  height:24px;
  pointer-events: none;
}

.sun {
  right:2px;
  top:2px;
}
.moon {
  left:2px;
  top:2px;
}
input ~ .icon.sun {
  visibility:visible;
}
input:checked ~ .icon.sun {
  visibility:hidden;
}

input ~ .icon.moon {
  visibility:hidden;
}
input:checked ~ .icon.moon {
  visibility:visible;
}



</style>