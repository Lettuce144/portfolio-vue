<script setup>
  import { ref } from 'vue';

  defineProps({
    title: String,
  });

  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <div class="rounded-t-lg">
    <button
      @click="toggle"
      class="w-full px-4 py-2 text-left flex justify-between items-center bg-primary text-white rounded-t-lg"
    >
      <span>{{ title }}</span>
      <svg
        :class="{'rotate-180': isOpen}"
        class="w-5 h-5 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div v-if="isOpen" class="p-4 text-text bg-primary-disabled">
      <!-- Slot for passing dynamic content into the accordion -->
      <slot></slot>
    </div>
  </div>
</template>
