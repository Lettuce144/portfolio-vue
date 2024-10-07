<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

defineProps({
  title: String,
  description: String,
  icon: String,
  link: String
})

const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}
</script>

<template>
    <RouterLink @click="warnDisabled" exactActiveClass="!border-primary !bg-primary" :to="link" 
    :class="{ 'shadow-pop-br': disabled }"
    class=" 
      no-underline
      border-solid 
      border-2 p-3 
      rounded-md
      border-transparent
     bg-tertiary 
     text-black
      shadow-[10px_10px_0px_0px_#000000]">
        <h2 class="mb-2 underline">{{ title }}</h2>
        <p class="text-base">{{ description }}</p>
        <img v-if="icon != null" :src="icon" alt="image" />
    </RouterLink>
</template>


<style scoped>

</style>