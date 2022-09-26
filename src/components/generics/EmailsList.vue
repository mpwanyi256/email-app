<template>
  <div class="email-list">
    <Actions />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Actions from "./Actions.vue";

export default defineComponent({
  name: "EmailsList",
  components: {
    Actions,
  },
});
</script>
<style scoped lang="scss">
.email-list {
  // height: calc(100vh - 130px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}
</style>
