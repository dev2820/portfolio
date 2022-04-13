<template>
  <div class="folder">
    <h3 class="folder-title">{{title}}</h3>
    <TranslucentCard class="card app-grid">
      <a v-for="item in items" :key="item.icon" 
        :href="item.link" 
        target="_blank" 
        class="app-shape" 
        :class="item.icon"
      >
      </a>
      
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
    a.app-shape {
      text-decoration: none;
      color: var(--on-surface);
      transition:0.3s;
      border-radius:1rem;
      box-shadow:var(--card-box-shadow);
    }
    a.app-shape:hover {
      transform:translateY(-4px);
      box-shadow:var(--card-box-shadow-16dp);
      .caption {
        visibility: visible;
      }
    }
  }
}
span.tooltip {
  padding:8px 12px;
  border-radius:1rem;

}
</style>