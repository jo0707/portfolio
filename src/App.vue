<template>
  <header class="z-8 fixed w-screen py-3 backdrop-blur-[2px] backdrop-filter">
    <TheNavigation />
  </header>
  <main class="overflow-x-hidden font-mono">
    <router-view
      v-slot="{ Component, route }"
      class="mx-auto min-h-screen px-16 py-24 lg:p-32"
    >
      <FadeTransition :dur="1">
        <component :is="Component" :key="route.name" />
      </FadeTransition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import TheNavigation from "./components/TheNavigation.vue";
import FadeTransition from "./components/transition/FadeTransition.vue";

const route = useRoute();

watch(
  () => route.name,
  (routeName) => {
    document.title = `${String(routeName)} - Jo` || "Jo";
  },
  { immediate: true }
);

function getParticlesLink() {
  return new URL(`./assets/particles/particles.json`, import.meta.url).href;
}

onMounted(() => {
  particlesJS.load("particle", getParticlesLink());
});
</script>
