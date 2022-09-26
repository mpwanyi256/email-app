<template>
  <div class="card">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailsList",
});
</script>
<style scoped lang="scss">
.card {
  min-height: 30px;
  // width: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 5px;
  border: none; //1px solid #3d3d3d;
  border-radius: 8px;
  background-color: rgb(232, 230, 230);
}
</style>
