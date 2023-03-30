<template>
  <div class="-lg:gap-6 flex flex-col place-items-center place-self-center lg:flex-row">
    <div class="mt-4 flex flex-1 flex-col">
      <SlideLeftTransition :dur="0.8">
        <h5 class="my-2 text-lg lg:text-xl">Hello!</h5>
      </SlideLeftTransition>
      <SlideLeftTransition :dur="1.1">
        <h1 class="my-2 text-4xl lg:text-5xl">I'm Joshua Sinaga</h1>
      </SlideLeftTransition>
      <SlideLeftTransition :dur="1.5">
        <h2 class="text-md my-2 sm:text-lg lg:text-xl">
          A software developer that focuses on web and android platforms
        </h2>
      </SlideLeftTransition>

      <SlideLeftTransition :dur="1.9">
        <RouterLink to="/about"
          class="underline-slate-900 dark:underline-slate-400 my-3 place-self-start py-3 underline sm:mt-10">About Me >
        </RouterLink>
      </SlideLeftTransition>
    </div>

    <div class="flex-1">
      <img class="w-92 lg:w-116 m-auto" src="../assets/img/profile.webp" alt="profile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideLeftTransition from "@/components/transition/SlideLeftTransition.vue";
</script>
