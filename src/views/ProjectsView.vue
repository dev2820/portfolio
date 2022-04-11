<template>
  <section id="projects">
    <TextTitle icon="user-circle">Projects</TextTitle>
    <div class="grid">
      <ProjectCard 
        v-for="project in projects.slice(0,showLength)" :key="project" 
        :project="project"
        data-aos="zoom-in-right"
      ></ProjectCard>
    </div>
    <CommonButton v-show="showLength < projects.length" primary @click="showMore(3)">더보기</CommonButton>
  </section>
</template>

<script lang="ts">
import ArrowButton from "@/components/Button/ArrowButton.vue";
import TextTitle from "@/components/Text/TextTitle.vue";
import FolderCard from "@/components/Card/FolderCard.vue"

import { defineComponent,ref,toRef, } from "vue";
import { skillsAndTools } from "@/assets/meta.json";
import ProjectCard from "@/components/Card/ProjectCard.vue";
import CommonButton from "@/components/Button/CommonButton.vue";
import { projects } from "@/assets/meta.json"
export default defineComponent({
  name: "ProjectsView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    }
  },
  components: {ArrowButton,TextTitle,FolderCard, ProjectCard,CommonButton},
  setup(props) {
    const showLength = ref(3);
    const showMore = () => {
      showLength.value += 3;
    }
    return {
      showLength,
      showMore,
      skillsAndTools,
      projects
    }
  },
});
</script>
<style lang="scss" scoped>
#projects {
  position:relative;
  padding-top:80px;
  width:1000px;
}

.grid {
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 500px;
  align-items:center;
  justify-items:center;
  justify-content:space-between;
}
</style>

