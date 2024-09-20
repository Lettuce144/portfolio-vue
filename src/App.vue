<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
   <HeaderBar/>
   <RouterView />
</template>

<style scoped>
a {
  color: black;
}
</style>
