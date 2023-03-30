<template>
  <Transition name="fade" mode="out-in" @enter="onEnter" @leave="onLeave" appear>
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
import { Transition } from "vue";

const props = defineProps(["dur"]);

function onEnter(el: HTMLElement) {
  el.style.transitionDuration = `${props.dur ?? 0.5}s`;
}

function onLeave(el: HTMLElement) {
  el.style.transitionDuration = `${(props.dur ?? 0.5) / 2}s`;
}
</script>

<style>
.fade-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.7s ease;
}

.fade-leave-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.2s ease;
}

.fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
