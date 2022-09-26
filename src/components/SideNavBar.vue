<template>
  <div class="side-nav">
    <div class="side-nav-links">
      <a href="#"
        v-for="route in routes"
        :key="route.path"
        :class="{ 'active': isActiveRoute(route.name)}"
        @click.prevent="switchRoute(route)">
          {{route.name}}
        </a>
    </div>
    <div class="side-nav-logout">
      <a href="#">Logout</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, Ref, ref } from "vue";
import { useStore } from 'vuex';
import {useRoute, useRouter} from 'vue-router'
import { Email } from "@/types/types";

interface Route {
  path: string;
  name: string
}

export default defineComponent({
  name: "SideNavBar",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const emails: Ref<Email[]> = computed(() => store.getters.emails);
    const currentRoute = computed(() => route.meta.name);

    const routes: Ref<Route[]> = ref([
      { path: '/', name: 'Inbox' },
      { path: '/achive', name: 'Achive' }
    ])

    function isActiveRoute(routeName: string) {
      return currentRoute.value === routeName;
    }

    function switchRoute(r: Route) {
      router.push(r.path);
    }

    return {
      emails,
      currentRoute,
      routes,

      switchRoute,
      isActiveRoute,
    };
  }
});
</script>
<style scoped lang="scss">
  .side-nav {
    height: inherit;
    display: flex;
    flex-direction: column;

    &-links {
      height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      display: inherit;
      flex-direction: column;
      gap: 5px;
      margin: 15px;

      a {
        padding: 6px;
        text-decoration: none;
        font-size: 18px;
        color: #000;
        display: block;
        background-color: #fff;
        border: 1px solid black;
        text-align: left;
      }

      .active {
        font-weight: bold;
      }
    }

    &-logout {
      height: 10vh;
      margin: 15px;

      a {
        padding: 6px;
        text-decoration: none;
        font-size: 18px;
        color: #000;
        display: block;
        background-color: #fff;
        border: 1px solid black;
        text-align: left;
      }
    }
  }
</style>
