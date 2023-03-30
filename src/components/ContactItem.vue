<template>
  <a class="flex rounded px-2 py-1 transition hover:shadow dark:hover:bg-slate-200 dark:hover:bg-opacity-30" :href="href"
    target="_blank">
    <SvgIcon class="my-auto mr-2" :class="classs" :path="path" type="mdi" size="28" />
    <p class="my-auto">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";

const props = defineProps(["path", "classs", "href", "text"]);
</script>
