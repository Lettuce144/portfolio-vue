<script setup>
import ViewBar from './ViewBar.vue';
</script>

<template>
    <!-- This should be global, but it works -->
    <section class="flex flex-col">
      <h1>{{ $t('Home_Title') }}</h1>
      <p>{{ $t('Home_Short') }}</p>
    </section>
    
    <ViewBar class="mt-4" />
</template>