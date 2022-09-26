<template>
  <div class="emails">
    <Card class="card" v-for="email in emails" :key="email.id">
      <div class="info">
        <input :checked="isSelected(email.id)" @change="selectEmail(email)" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <p>{{ email.subject }}</p>
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, Ref, computed } from "vue";
import Card from "./Card.vue";
import { Email } from "@/types/types";
import { useStore } from 'vuex'

export default defineComponent({
  name: "Emails",
  components: {
    Card,
  },
  props: {
    emails: {
      type: Array as PropType<Email[]>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const selectedEmailIds: Ref<number[]> = computed(() => store.getters.selectedEmailIds)

    function selectEmail( email: Email): void {
        store.dispatch('addToSelectedEmail', email.id);
    }

    function isSelected(EmailId: number): boolean {
        const idx = selectedEmailIds.value.findIndex(id => id === EmailId);
        return !!(idx >=0);
    }

    return {
        selectedEmailIds,

        selectEmail,
        isSelected
    }
  }
});
</script>
<style scoped lang="scss">
.emails {
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 5px;
  background-color: inherit;

  .card {
    text-align: left;
    display: inline-flex;
    gap: 10px;
    font-size: 14px;
    line-height: 1.5;
    justify-content: center;

    .info {
      display: inline-flex;
      gap: 10px;
      margin: 0;
      padding: 0px 10px;
      height: 100%;
      width: 100%;
      align-items: center;

      input, p {
        top: 0;
        bottom: 0;
        cursor: pointer;
        margin: unset;
      }
    }
  }
}
</style>
