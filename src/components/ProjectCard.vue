<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  types: Array
})

const checked = ref(false);
</script>

<template>
  <div class="project-card" :class="types">
    <img v-if="image != null" :src="image" alt="project image" />
    <h3 class="flex justify-between">
      <a style="font-weight: bold; color: black" :href="link">{{ title }}</a>
      <!-- Triangle toggle button -->
      <span class="toggle-triangle" @click="checked = !checked">
        <span :class="{'rotate-180': checked}">⇣</span>
      </span>
    </h3>
    <Transition>
      <!-- Description toggles with checked state -->
      <p v-if="checked">{{ description }}</p>
    </Transition>
  </div>
  </template>

<style>
.project-card {
  color: black;
  background-color: antiquewhite;
  padding: 1.25rem;
  border-radius: 10px;
  width: 256px;
  max-width: 512px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project-card img {
  width: 256px;
  max-height: 128px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.toggle-triangle {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  transition: transform 0.3s;
}

/* Rotate the triangle when checked */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
