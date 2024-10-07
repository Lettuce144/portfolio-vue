<script setup>
defineProps({
  title: String,
  location: String,
  from: Number,
  to: Number,
  isWork: Boolean,
});
</script>

<template>
  <div class="flex flex-row items-start">
    <!-- Vertical Timeline -->
    <div class="relative flex flex-col items-center">
      <!-- Circle with Icon -->
      <div class="w-12 h-12 border-2 border-gray-700 rounded-2xl flex items-center justify-center">
        <img class="invert h-8 w-8" :src="isWork ? '/src/assets/svg/job-icon.svg' : '/src/assets/svg/grad-icon.svg'" alt="Experience Image"/>
      </div>
      
      <!-- Vertical Line -->
      <div class="h-full w-0.5 bg-gray-500"></div>
    </div>

    <!-- Content Next to the Timeline Circle -->
    <div class="ml-6 w-full">
      <p class="text-gray-300 font-bold text-lg">{{ title }}</p>
      <p class="text-gray-400 italic">{{ location }} | {{ from }} - {{ to }}</p>
      <div class="text-gray-300 mt-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some padding to space out the circles */
.timeline-item:not(:last-child) .h-full {
  min-height: 50px; /* Adjust this for spacing between circles */
}
</style>
