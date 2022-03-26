<template>
  <section id="home">
    <img class="cloud small" src="@/assets/myCloud.png"/>
    <img class="cloud big" src="@/assets/myCloud.png"/>
    <img class="sun big" :class="{appear:!isDarkmode}" src="@/assets/mySun.png"/>
    <img class="moon big" :class="{appear:isDarkmode}" src="@/assets/myMoon.png"/>
    <img class="character" src="@/assets/myCharacter.png"/>
    <p class="greeting">{{greeting}}</p>
    <p class="job"><font>{{position}}</font> {{job}}</p>
    <p class="name"><font>{{name}}</font> {{iam}}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent,ref,toRef,watch,onMounted } from "vue";
export default defineComponent({
  name: "BannerView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    }
  },
  components: {},
  setup(props) {
    const isDarkmodeRef = toRef(props,'isDarkmode');

    return {
      greeting:"안녕하세요",
      position:"FE",
      job:"개발자",
      name: "테라",
      iam:"입니다",
      isDarkmodeRef
    };
  },
});
</script>
<style lang="scss" scoped>
#home {
  position:relative;
  height:1024px;
  width:1000px;
  .cloud {
    position:absolute;
    &.small {
      left:-100px;
      top:160px;
      width: 360px;
      height:240px;
      animation:flow-left 30s infinite linear;
    }
    &.big {
      right:-200px;
      top:600px;
      width:450px;
      height:300px;
      animation:flow-right 35s infinite linear;
    }
  }
  .sun, .moon {
    position:absolute;
    right:40px;
    top:-640px;
    width:320px;
    transition:0.6s;
    &.appear {
      transform:translateY(640px);
    }
  }
  .character {
    position:absolute;
    height:500px;
    width:500px;
    left:464px;
    top:226px;
    animation:floating 3s infinite ease-in;
  }
  p {
    user-select:none;
    position:absolute;
    left:108px;
    top:360px;
    font-size: var(--6xl);
    font-weight: var(--bold);
    text-align:left;
    margin:0;
    z-index:10;
    &.job {
      transform:translateY(calc(var(--6xl)*1.375));
    }
    &.name {
      transform:translateY(calc(var(--6xl)*2.75));
    }
    font {
      color:var(--primary-700)
    }
    &:before {
      content:'';
      position:absolute;
      z-index:-1;
      left:0;
      top:0;
      height:100%;
      width:0%;
      transition:0.3s ease-in;
      background:var(--primary-700);
      opacity:0.3;
    }
    &:hover {
      font {
        transition:0.3;
      }
      &:before {
        width:100%;
      }
    }
  }
}
@keyframes flow-right {
  0% {
    transform:translate(0px);
  }
    50% {
    transform:translate(100px);
  }
  100% {
    transform:translate(0px);
  }
}
@keyframes flow-left {
  0% {
    transform:translate(0px);
  }
  50% {
    transform:translate(-100px);
  }
  100% {
    transform:translate(0px);
  }
}
@keyframes floating {    
  0% {
    transform:rotate(10deg) translateY(0px);
  }
  50% {
    transform:rotate(10deg) translateY(-5px);
  }
  100% {
    transform:rotate(10deg) translateY(0px);
  }
}
</style>

