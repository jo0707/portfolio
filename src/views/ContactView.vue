<template>
  <div class="w-min text-center">
    <SectionTitle>Contact Me</SectionTitle>

    <div class="mt-24 flex flex-col justify-center gap-6 transition-all">
      <ContactItem
        classs="text-red-400"
        :path="mdiGmail"
        text="josua123690707@gmail.com"
        href="mailto:josua123690707@gmail.com"
      />
      <ContactItem
        classs="text-dark-700 dark:text-slate-200"
        :path="mdiGithub"
        text="jo0707"
        href="https://github.com/jo0707"
      />
      <ContactItem
        classs="text-violet-400"
        :path="mdiInstagram"
        text="@jo907__"
        href="https://instagram.com/jo907__"
      />
      <ContactItem
        classs="text-blue-400"
        :path="mdiSend"
        text="@jo90707"
        href="https://t.me/jo90707"
      />
    </div>

    <h6 class="mt-24 text-sm opacity-50">2023 © Joshua Sinaga</h6>
  </div>
</template>

<script setup lang="ts">
import ContactItem from "@/components/ContactItem.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { mdiGmail, mdiGithub, mdiInstagram, mdiSend } from "@mdi/js";
</script>
