<template>
  <section id="skills-and-tools">
    <TextTitle icon="user-circle">Skills & Tools</TextTitle>
    <div class="folder-grid">
      <FolderCard
        v-if="skillsAndTools['Front End'].length > 0"
        :title="skillFiledNames['FE']"
        :items="skillsAndTools['Front End']"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="500"
      ></FolderCard>
      <FolderCard
        v-if="skillsAndTools['Back End'].length > 0"
        :title="skillFiledNames['BE']"
        :items="skillsAndTools['Back End']"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="500"
      ></FolderCard>
      <FolderCard
        v-if="skillsAndTools['Language'].length > 0"
        :title="skillFiledNames['Lang']"
        :items="skillsAndTools['Language']"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="500"
      ></FolderCard>
      <FolderCard
        v-if="skillsAndTools['Others'].length > 0"
        :title="skillFiledNames['Others']"
        :items="skillsAndTools['Others']"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="500"
      ></FolderCard>
    </div>
  </section>
</template>

<script lang="ts">
import TextTitle from "@/components/Text/TextTitle.vue";
import FolderCard from "@/components/Card/FolderCard.vue";
import { defineComponent } from "vue";
import {
  skillsAndTools as skillsAndToolsKR,
  skillFiledNames as skillFiledNamesKR,
} from "@/i18n/meta.ko.json";
import {
  skillsAndTools as skillsAndToolsEN,
  skillFiledNames as skillFiledNamesEN,
} from "@/i18n/meta.en.json";
export default defineComponent({
  name: "SkillsAndToolsView",
  props: {
    isDarkmode: {
      type: Boolean,
      default: false,
    },
  },
  components: { TextTitle, FolderCard },
  setup(props) {
    return {
      skillsAndTools:
        window.navigator.language === "ko-KR"
          ? skillsAndToolsKR
          : skillsAndToolsEN,
      skillFiledNames:
        window.navigator.language === "ko-KR"
          ? skillFiledNamesKR
          : skillFiledNamesEN,
    };
  },
});
</script>
<style lang="scss" scoped>
#skills-and-tools {
  position: relative;
  padding-top: 80px;
  min-height: calc(1024px - 80px);
  width: 100%;
}

.folder-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  justify-content: space-between;
}

@media (min-width: 758px) and (max-width: 999px) {
  .folder-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
@media (min-width: 335px) and (max-width: 758px) {
  .folder-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
