<template>
  <div class="card">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRef } from "vue";
export default defineComponent({
  name: "TranslucentCard",
});
</script>

<style scoped lang="scss">
.card {
  border-radius: 1rem;
  background:var(--glass-background);
  padding:1.5rem
}
</style>