<template>
  <div class="action">
    <div class="action-options">
      <input @change="selectAllEmails($event.target.checked)" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    </div>
    <button>Mark as read</button>
    <button>Archive</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
  name: "EmailsList",
  setup() {
    const store = useStore();

    function selectAllEmails(all: boolean): void {
      store.dispatch('selectAll', all);
    }

    return {
      selectAllEmails
    }
  },
});
</script>
<style scoped lang="scss">
.action {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: hidden;
  align-items: center;
  padding-left: 5px;

  &-options {
    display: inline-flex;
    gap: 10px;
  }

  button {
    height: 30px;
    cursor: pointer;
    background-color: #efefef;
    border: 0.5px solid #efefef;
    border-radius: 8px;
  }
}
</style>
