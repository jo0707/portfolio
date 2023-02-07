<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<template>
  <div class="mx-auto max-w-3xl text-justify">
    <SectionTitle class="mb-12">About me</SectionTitle>

    <p class="mb-6">
      I am Joshua Palti Sinaga and currently focusing on developing Android and
      web platform applications.
    </p>
    <p class="mb-6">
      I started my programming at 16 years old. I have studied at SMKN 9 Medan
      and currently studying at the Sumatra Institute of Technology in the
      informatics engineering study program.
    </p>
    <p class="mb-12">
      🏆 Has participated and won 1st place at LKS North Sumatera.
    </p>

    <RouterLink
      to="/projects"
      class="underline-slate-400 my-3 mt-10 place-self-start py-3 underline"
      >My Projects ></RouterLink
    >
  </div>
</template>
