<template>
  <div class="home">
    <SideNavBar />
    <EmailsPane :emails="emails" />
    <ViewEmail v-if="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, computed } from "vue";
import SideNavBar from "@/components/SideNavBar.vue";
import EmailsPane from "@/components/EmailsPane.vue";
import ViewEmail from "@/components/generics/ViewEmail.vue";
import { Email } from "@/types/types";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    SideNavBar,
    EmailsPane,
    ViewEmail,
  },

  setup() {
    const store = useStore();
    const emails: Ref<Email[]> = computed(() => store.getters.emails);

    return {
      emails,
    };
  },
});
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  background-color: inherit;
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>
