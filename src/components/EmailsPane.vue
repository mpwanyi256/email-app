<template>
  <div class="emails-pane">
    <div class="emails-pane-header">
      <h3>{{currentRoute}}</h3>
      <h3>Emails selected ({{ selectedEmailsCount }})</h3>
    </div>
    <EmailsList />
    <Emails :emails="emails" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, Ref } from "vue";
import EmailsList from "@/components/generics/EmailsList.vue";
import Emails from "./generics/Emails.vue";
import { Email } from "@/types/types";
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: "EmailsPane",
  components: {
    EmailsList,
    Emails,
  },
  props: {
    emails: {
      type: Array as PropType<Email[]>,
      required: true,
    },
  },

  setup() {
    const store = useStore();
    const selectedEmailIds: Ref<number[]> = computed(() => store.getters.selectedEmailIds);
    const selectedEmailsCount: Ref<number> = computed(() => {
      const { length } = selectedEmailIds.value;
      return length;
    })

    // Route Info
    const route = useRoute();
    const currentRoute = computed(() => route.meta.name);

    return {
      selectedEmailsCount,
      currentRoute
    }
  }
});
</script>
<style scoped lang="scss">
.emails-pane {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  overflow: hidden;

  &-header {
    height: 100px;
    text-align: left;
  }
}
</style>
