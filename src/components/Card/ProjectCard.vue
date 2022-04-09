<template>
  <div class="card">
    <div class="main-info">
      <div class="content">
        <h3 class="title">{{project.title}}</h3>
        <p class="description">{{project.description}}</p>
      </div>
      <div class="tag-list">
        <span class="tag" v-for="tag in project.tags" :key="tag">#{{tag}} </span>
      </div>
    </div>
    <hr/>
    <div class="additional-info">
      <span class="period">{{project.period}}</span>
      <a class="github-icon" :href="project.github" target="_blank">
        <img :src="githubIcon">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import githubIcon from "@/assets/svg/brand-github.svg"
import IProject from "@/interfaces/IProject";
export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object as () => IProject
    }
  },
  setup(props) {
    console.log(props.project)
    return {
      githubIcon
    }
  }
});
</script>

<style scoped lang="scss">
hr {
  margin:0;
  opacity:0.2;
}
.card {
  transition:0.3s;
  box-sizing:border-box;
  border-radius: 1rem;
  width:264px;
  background-color: var(--surface);
  box-shadow:var(--card-box-shadow);
  .main-info {
    height:320px;
    padding:1rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .title {
      font-size:var(--2xl);
      font-weight:900;
      margin:1rem 0 2rem 0;
    }
    .description {
      text-align:start;
      color:var(--on-surface);
      opacity:0.8;
      line-height:1.5rem;
      margin-bottom:32px;
    }
    .tag-list {
      position:relative;
      bottom:0;
      display:flex;
      flex-wrap:wrap;
      .tag {
        opacity:0.6;
        margin-right:0.5rem;
        margin-bottom:0.5rem;
      }
    }

  }
  .additional-info {
    height:2rem;
    padding:1rem;
    display:flex;
    justify-content: space-between;
    * {
      margin:auto 0;
    }
    .period {
      font-weight:bold;
    }
    a.github-icon {
      img {
        height:32px;
      }
    }
  }
}
.card:hover {
  transform:translateY(-4px);
  box-shadow:var(--card-box-shadow-16dp);
}
</style>