<template>
  <a
    class="border-1 flex flex-row rounded-sm border-slate-500 border-opacity-50 bg-slate-700 bg-opacity-0 px-2 py-1 shadow transition-all dark:bg-slate-300 dark:bg-opacity-10"
    :class="{
      'hover:bg-opacity-100 hover:text-slate-200 hover:shadow-lg dark:hover:bg-opacity-100 dark:hover:text-slate-800':
        href,
      'text-slate-500 dark:text-slate-500': !href,
    }"
    target="_blank"
    :href="href"
  >
    <SvgIcon class="my-auto mr-2" :path="path" type="mdi" size="18" />
    <p class="my-auto select-none text-xs">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";

defineProps(["path", "href", "text"]);
</script>
