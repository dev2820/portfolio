<template>
  <div class="folder">
    <h3 class="folder-title">{{title}}</h3>
    <TranslucentCard class="card app-grid">
      <button v-for="item in items" :key="item.icon" 
        target="_blank" 
        class="app-shape" 
        :class="item.icon"
      >
        <span class="tooltip">{{item.proficiency}}</span>
      </button>
    </TranslucentCard>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
import TranslucentCard from "@/components/Card/TranslucentCard.vue";
import Item from "@/interfaces/Item"

export default defineComponent({
  name: "FolderCard",
  components:{TranslucentCard},
  props: {
    title: String,
    items: {
      type: Array as () => Array<Item>
    }
  }
});
</script>

<style scoped lang="scss">
.card {
  border-radius: 1rem;
  background:var(--glass-background);
  padding:1.5rem;
  width:268px;
}
.folder {
  h3.folder-title {
    font-size:var(--3xl);
    position:relative;
    left:0;
  }
  .app-grid {
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,6.5rem);
    align-items:center;
    justify-items:center;
    justify-content:space-between;
    button.app-shape {
      border:none;
      cursor:pointer;
      text-decoration: none;
      color: var(--on-surface);
      transition:0.3s;
      border-radius:1rem;
      box-shadow:var(--card-box-shadow);
    }
    button.app-shape:hover {
      transform:translateY(-4px);
      box-shadow:var(--card-box-shadow-16dp);
      span.tooltip {
        opacity:1;
      }
    }
  }
}
span.tooltip {
  transition:0.3s;
  opacity:0;
  padding:8px 12px;
  border-radius:1rem;
  background: var(--primary-500);
  color:var(--on-primary);
  position:absolute;
  width:160px;
  left:2rem;
  margin-left:-5rem;
  top:0;
  margin-top: -60px;
  font-size:var(--base);
}
span.tooltip::after {
  content:'▼';
  font-size:1.2rem;
  position:absolute;
  color: var(--primary-500);
  left:50%;
  margin-left:-0.6rem;
  bottom:-1rem;


}
</style>