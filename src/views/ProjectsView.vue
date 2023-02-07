<template>
  <div class="max-w-5xl text-center">
    <SectionTitle class="mb-12">My Projects</SectionTitle>

    <ul
      class="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="project in projects"
        :key="project.id"
        class="border-1 rounded-sm border-slate-500 border-opacity-30 bg-slate-300 bg-opacity-20 shadow-lg backdrop-blur-sm backdrop-filter dark:border-slate-200 dark:border-opacity-30 dark:bg-slate-200 dark:bg-opacity-20"
      >
        <ProjectItem class="max-w-80" :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from "@/components/ProjectItem.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import type { Project } from "@/stores/Project";
import p from "@/stores/projects.json";

const projects = p as Project[];
</script>
