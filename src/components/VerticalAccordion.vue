<script setup>
import { ref } from 'vue';

defineProps({
  items: Array
})

const activeIndex = ref([])
</script>

<template>
    <div class="space-y-2">
      <div v-for="(item, index) in items" :key="index" class="border border-gray-300 rounded-lg">
        <button
          @click="toggle(index)"
          class="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <span>{{ item.title }}</span>
          <svg
            :class="{ 'transform rotate-180': activeIndex === index }"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <transition name="accordion" mode="out-in">
          <div v-if="activeIndex === index" class="p-4 text-gray-700">
            {{ item.content }}
          </div>
        </transition>
      </div>
    </div>
  </template>