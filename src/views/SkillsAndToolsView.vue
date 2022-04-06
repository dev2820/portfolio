<template>
  <section id="skills-and-tools">
    <TextTitle icon="user-circle">Skills & Tools</TextTitle>
    <div class="folder-grid">
      <FolderCard title="웹 프론트" :items="skillsAndTools['web FE']"></FolderCard>
      <FolderCard title="앱" :items="skillsAndTools['App']"></FolderCard>
      <FolderCard title="백엔드" :items="skillsAndTools['Back End']"></FolderCard>
      <FolderCard title="언어" :items="skillsAndTools['Language']"></FolderCard>
      <FolderCard title="데브옵스" :items="skillsAndTools['DevOps']"></FolderCard>
      <FolderCard title="기타" :items="skillsAndTools['Others']"></FolderCard>
    </div>
  </section>
</template>

<script lang="ts">
import ArrowButton from "@/components/Button/ArrowButton.vue";
import TextTitle from "@/components/Text/TextTitle.vue";
import FolderCard from "@/components/Card/FolderCard.vue"

import { defineComponent,ref,toRef, } from "vue";
import { skillsAndTools } from "@/assets/meta.json";
export default defineComponent({
  name: "SkillsAndToolsView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    }
  },
  components: {ArrowButton,TextTitle,FolderCard},
  setup(props) {
    return {
      skillsAndTools
    }
  },
});
</script>
<style lang="scss" scoped>
#skills-and-tools {
  position:relative;
  padding-top:80px;
  height:calc(1024px - 80px);
  width:1000px;
  
}

.folder-grid {
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr);
  align-items:center;
  justify-items:center;
  justify-content:space-between;
}
</style>

