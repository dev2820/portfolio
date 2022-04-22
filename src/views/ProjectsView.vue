<template>
  <section id="projects">
    <TextTitle icon="user-circle">Projects</TextTitle>
    <div class="grid">
      <ProjectCard 
        v-for="project in projects?.slice(0,showLength)" :key="project.github" 
        :project="project"
        data-aos="zoom-in-right"
      ></ProjectCard>
    </div>
    <CommonButton v-show="showLength < projects.length" primary @click="showMore(3)">더보기</CommonButton>
  </section>
</template>

<script lang="ts">
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
  components: {TextTitle,FolderCard, ProjectCard,CommonButton},
  setup(props) {
    const showLength = ref(3);
    const showMore = (num:number) => {
      showLength.value += num;
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
  width:100%;
}

.grid {
  display:grid;
  margin:0 auto;
  align-items:center;
  justify-items:center;
  justify-content:center;
  margin-bottom:5rem;
}
@media (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows:452px;
  }
}
@media (min-width: 758px) and (max-width: 999px) {
  .grid {
    width:600px;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows:452px;
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  .grid {
    grid-template-columns: repeat(1,1fr);
    grid-auto-rows:452px;
  }
}
</style>

