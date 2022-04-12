<template>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" :style="directStyle" class="icon icon-tabler icon-tabler-arrow-big-top" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    </svg>
    <div class="guide-message" :class="{'guide-exist':guideMessage.length>0}">
      {{guideMessage}}
    </div>
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
    },
    "guideMessage": {
      type: String,
      default() {
        return "";
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
      arrowSrc,
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
  
  svg {
    width:72px;
    height:72px;
    fill:var(--primary-500);
    stroke:var(--primary-500);
  }
  .guide-message {
    visibility:hidden;
    opacity:0;
    position:absolute;
    height: 1.25rem;
    right:-7rem;
    top:50%;
    margin-top:-1rem;
    text-align:center;
    line-height:1.25rem;
    background:var(--primary-500);
    color:var(--on-primary);
    padding:0.5rem 1rem;
    border-radius:0.5rem;
    transition:0.3s;
    &:before {
      content:'◀';
      color: var(--primary-500);
      position:absolute;
      font-size:2rem;
      left:-0.9rem;
    }
  }
  &:hover {
    .guide-message.guide-exist {
      visibility: visible;
      opacity:1;
    }
  }
}

</style>