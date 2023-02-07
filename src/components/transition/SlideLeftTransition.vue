<template>
  <Transition
    name="slideleft"
    mode="out-in"
    @enter="onTransition"
    @leave="onTransition"
    appear
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
import { Transition } from "vue";

const props = defineProps(["dur"]);

function onTransition(el: HTMLElement) {
  el.style.transitionDuration = `${props.dur ?? 0.5}s`;
}
</script>

<style>
.slideleft-enter-active .slideleft-leave-active {
  transform: translateX(0);
  transition: all 0.8s ease-in;
}

.slideleft-enter-from {
  transform: translateX(75px);
}

.slideleft-leave-to {
  transform: translateX(-75px);
}
</style>
