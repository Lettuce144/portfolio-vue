<template>
  <div class="border border-gray-700 rounded-lg p-4 w-full md:w-1/3">
    <div class="flex justify-between items-center">
      <h3 class="text-2xl font-semibold">{{ title }}</h3>
      <span class="text-lg font-medium text-gray-400">{{ stars }} stars</span>
    </div>
    <p class="mt-2 text-base">{{ description }}</p>
    <div class="mt-4 flex justify-between items-center text-sm text-gray-400">
      <span>{{ commits }} commits</span>
      <a :href="link" target="_blank">View on GitHub</a>
    </div>
    <div class="mt-2 gap-1 flex">
      <span class="tag" v-for="(type, i) in types" :key="i">{{ type }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  stars: Number,
  commits: Number,
  link: String,
  types: Array
})
</script>
