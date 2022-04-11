<template>
  <div class="card">
    <a class="content" :href="link">
      <span class="blue-container">
        <img :src="img || '#'"/>
      </span>
      <strong class="folder-title">{{title}}</strong>
      <small>{{subtitle}}</small>
    </a>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "CloudCard",
  props: {
    title: String,
    subtitle: String,
    link:String,
    img: String
  },
});
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: var(--onSurface);
}
.card {
  box-sizing:border-box;
  border-radius: 2rem;
  width:232px;
  background-color: var(--button-background);
  filter: var(--drop-shadow);
  box-shadow: var(--button-inner-shadow);
  .content {
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-content: center;
    align-items: center;
    span.blue-container {
      width:200px;
      height:200px;
      border-radius:2rem;
      background:var(--primary-100);
      display:flex;
      justify-content: center;
      margin-bottom:3.25rem;
      img {
        width:200px;
        margin:auto 0;
      }
    }
    strong {
      
      transition:0.3s;
      font-size:var(--2xl);
      margin-bottom:1rem;
    }
    small {
      
      transition:0.3s;
      font-size:var(--base);
      margin-bottom:2rem;
    }
  }
}
.card:hover {
  
  strong,small {
    color:var(--primary-500);
  }
}
</style>