<script setup>
import { RouterView } from 'vue-router'
import IntroductionSection from './components/IntroductionSection.vue';
</script>

<template>
  <IntroductionSection />
  <RouterView />
</template>

<style scoped>
a {
  color: black;
}
</style>
