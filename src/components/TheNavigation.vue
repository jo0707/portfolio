<template>
  <nav>
    <ul class="md:text-md flex h-full w-full flex-row items-center justify-center gap-4 text-sm sm:gap-6">
      <li v-for="route in routes" :key="route.name">
        <RouterLink :to="route.path" class="py-3 opacity-60 transition dark:text-slate-200 hover:dark:opacity-100">{{
          route.name }}</RouterLink>
      </li>
      <li>
        <a @click="dark = !dark" href="#" class="py-3 opacity-60 transition dark:text-slate-200 hover:dark:opacity-100">
          <SvgIcon class="mt-2" size="20" :path="mdiBrightness4" type="mdi" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { ref, watch } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiBrightness4,
  mdiLamp,
  mdiThemeLightDark,
  mdiWeatherNight,
  mdiWeatherSunny,
} from "@mdi/js";

const dark = ref(true);

watch(dark, (_, mDark) => {
  if (mDark) document.body.classList.remove("dark");
  else document.body.classList.add("dark");
});
</script>

<style scoped>
a.router-link-exact-active {
  border-bottom: 2px solid gainsboro;
  opacity: 1;
}
</style>
