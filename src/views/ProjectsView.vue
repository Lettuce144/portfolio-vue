<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
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

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    data.forEach((repo) => {
      if (repo.topics.includes('portfolio')) {
        projects.value.push({
          title: repo.name,
          description: repo.description,
          link: repo.html_url,
          stars: repo.stargazers_count,
          commits: repo.commits_url.split('{')[0], // Fetch commits
          types: repo.topics
        })
      }
    })
  } catch (error) {
    console.log(error)
  }
})

const filteredProjects = computed(() => {
  if (!currentFilter.value) return projects.value
  return projects.value.filter(project => project.types.includes(currentFilter.value))
})

function handleToggle(index) {
  Filters.value = Filters.value.map((_, i) => i === index)
}
</script>

<template>
  <main class="mt-4 bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
    <h2 class="p-0 mb-4 text-4xl">{{ $t('Projects_Page_Title') }}</h2>
    <!-- Filters -->
    <div class="flex flex-wrap gap-2 mb-6">
      <span v-for="filter in Filters" 
        :key="filter" 
        :class="{'enabled': currentFilter === filter}" 
        class="tag cursor-pointer"
        @click="currentFilter = filter"
        @toggle="handleToggle(filter)">
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) || 'All' }}
      </span>
    </div>

    <div class="flex flex-wrap gap-6">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :stars="project.stars"
        :commits="project.commits.length"
        :link="project.link"
        :types="project.types"
      />
    </div>
  </main>
</template>

<style scoped>
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
