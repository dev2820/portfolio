<template>
  <button>
    <img :style="directStyle" :src="arrowSrc" />
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import arrowLight from "@/assets/png/arrow-big-top-light.png"
import arrowDark from "@/assets/png/arrow-big-top-dark.png"
type directionType = 'top'|'botton'|'right'|'left'
export default defineComponent({
  name: "ArrowButton",
  props: {
    "direction":{
      type:String as () => directionType,
      default() {
        return 'top';
      }
    },
    "isDarkmode": {
      type:Boolean,
      default() {
        return false;
      }
    }
  },
  setup(props) {
    props = reactive(props);
    const directionRef = toRef(props, "direction");
    const isDarkmodeRef = toRef(props,'isDarkmode');

    const directStyle = computed(()=>{
      let degree = 0;
      if(directionRef.value === 'top') degree = 0;
      else if(directionRef.value === 'bottom') degree = 180;
      else if(directionRef.value === 'right') degree = 90;
      else if(directionRef.value === 'left') degree = 270;
      return {
        'transform':`rotate(${degree}deg)`
      }
    })

    const arrowSrc = computed(()=> {
      if(isDarkmodeRef.value) {
        return arrowDark;
      }
      else {
        return arrowLight;
      }
    })
    return {
      directStyle,
      arrowSrc
    }
  },
});
</script>

<style scoped lang="scss">
button {
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 50%;
  background-color: var(--button-background);
  filter: var(--drop-shadow);
  box-shadow: var(--button-inner-shadow);
  cursor: pointer;
  
  img {
    width:72px;
    height:72px;
  }
}
</style>