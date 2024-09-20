<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
//import LabelElement from '@/components/LabelElement.vue'

import { ref, onMounted, computed } from 'vue'

const projects = ref([])
const currentFilter = ref('')
const Filters = ref(['', 'fullstack', 'frontend', 'backend', 'games', 'misc'])

onMounted(async () => {
  const url = 'https://api.github.com/users/Lettuce144/repos'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Puts the data of my portfolio with the tag 'portfolio' in the projects array
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Request failed!');
    }
    const data = await response.json()
    data.forEach((repo) => {
      if (repo.topics.includes('portfolio')) {
        projects.value.push({
          title: repo.name,
          description: repo.description,
          link: repo.html_url,
          types: repo.topics
        })
      }
    });
  } catch (error) {
    console.log(error);
  }
})

// Returns which cards to show based on the current filter
const filteredProjects = computed(() => {
  if (!currentFilter.value) return projects.value
  return projects.value.filter(project => project.types.includes(currentFilter.value))
})

// Handle toggle event from child components
function handleToggle(index) {
  Filters.value = Filters.value.map((_, i) => i === index);
}
</script>

<template>
  <main>
    <h1 class="mb-2">{{ $t('MyWork') }}</h1>
    <div class="flex flex-wrap gap-1">
      <!-- Used to be LabelElement! -->
      <span v-for="filter in Filters" 
        :key="filter" 
        :is-disabled="currentFilter == filter" 
        :class="{'enabled': currentFilter === filter}" class="tag"
        @click="currentFilter = filter"
        @toggle="handleToggle(filter)">
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) || $t('All') }}
      </span>
      
    </div>

    <div class="flex flex-wrap justify-between content-center flex-row items-start gap-6 font-normal mt-4">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :types="project.types"
      />
    </div>
  </main>
</template>

<style scoped>
/* Remove the main style from main.css */
/* Temp */
main {
  display: block;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: normal;
  flex-direction: column;
  gap: 1.5em;
  row-gap: 2em;
}
</style>
