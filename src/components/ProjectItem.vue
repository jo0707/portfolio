<template>
  <div>
    <img
      class="h-36 w-full rounded-sm object-cover object-top"
      :src="getImageUrl()"
      :alt="project.title"
    />
    <div class="h-max p-2 text-sm">
      <h5 class="text-md font-bold">{{ project.title }}</h5>
      <p class="h-30 pt-4 text-left">{{ project.desc }}</p>
      <div class="mt-2 flex flex-row justify-between">
        <ImageButton :path="mdiGithub" :href="project.github" text="GitHub" />
        <ImageButton :path="mdiApplication" :href="project.demo" text="Demo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/stores/Project";
import { mdiApplication, mdiGithub } from "@mdi/js";
import ImageButton from "./ImageButton.vue";

const props = defineProps<{ project: Project }>();

function getImageUrl(): string {
  return new URL(
    `../assets/img/projects/${props.project.image}.png`,
    import.meta.url
  ).href;
}
</script>
