<template>
  <section id="contact">
    <TextTitle>Contact</TextTitle>
    <div class="row">
      <CloudCard 
        class="cloud-card"
        :title="contact.address.title" 
        :subtitle="contact.address.subtitle" 
        :link="contact.address.link"
        :img="mappin3dIcon"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="500"
      ></CloudCard>
      <CloudCard 
        class="cloud-card"
        :title="contact.blog.title" 
        :subtitle="contact.blog.subtitle" 
        :link="contact.blog.link"
        :img="pencil3dIcon"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="500"
      ></CloudCard>
      <CloudCard 
        class="cloud-card"
        :title="contact.email.title" 
        :subtitle="contact.email.subtitle" 
        :link="contact.email.link"
        :img="email3dIcon"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
      ></CloudCard>
      <CloudCard 
        class="cloud-card"
        :title="contact.github.title" 
        :subtitle="contact.github.subtitle" 
        :link="contact.github.link"
        :img="Octocat"
        data-aos="fade-down"
        data-aos-delay="700"
        data-aos-duration="500"
      ></CloudCard>
    </div>
  </section>
</template>

<script lang="ts">
import TextTitle from "@/components/Text/TextTitle.vue";
import CloudCard from "@/components/Card/CloudCard.vue"

import mappin3dIcon from "@/assets/png/mappin3dIcon.png";
import pencil3dIcon from "@/assets/png/pencil3dIcon.png";
import email3dIcon from "@/assets/png/email3dIcon.png";
import Octocat from "@/assets/png/Octocat.png";
import { contact } from "@/assets/meta.json"
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
  components: {TextTitle,CloudCard},
  setup(props) {
    return {
      email3dIcon,
      pencil3dIcon,
      mappin3dIcon,
      Octocat,
      skillsAndTools,
      contact,
    }
  },
});
</script>
<style lang="scss" scoped>

#contact {
  position:relative;
  padding-top:80px;
  padding-bottom:240px;
  width:100%;
  div.row {
    margin-top:200px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    .cloud-card {
      margin-bottom:40px;
    }
  }
}
</style>

