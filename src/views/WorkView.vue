<script setup>
import ExperienceCircle from '@/components/ExperienceCircle.vue';
</script>

<template>
    <main class="flex gap-8 flex-col">
      <div class="mt-4 bg-gray-900 border-2 border-gray-700 rounded-lg p-6 text-gray-100">
        <h2>{{ $t('Work_title') }}</h2>
        <p>{{ $t('Work_cv_why') }} <a href="/src/assets/cv.pdf">{{ $t('work_cv_link') }}</a></p>
        
        <h2 class="mt-4">{{ $t('Work_timeline') }}</h2>
        
        <div class="flex flex-col gap-12 mt-8">
          <ExperienceCircle title="Vulploegmederwerker Plus Buist" location="Spijk" from="2023-11" to="2024-08" is-work>
            <p>{{ $t('plus_about') }}</p>
          </ExperienceCircle>
    
          <ExperienceCircle title="Software Developer Alfa-College" location="Groningen" from="2023" to="heden">
            <p>{{ $t('alfa_about') }}</p>
          </ExperienceCircle>
    
          <ExperienceCircle title="VMBO-TL Dollard College" location="Woldendorp" from="2019" to="2023">
            <p>{{ $t('woldendorp_about') }}</p>
          </ExperienceCircle>
        </div>
      </div>

      <div class="flex md:flex-row flex-col gap-4">
        <div class="w-full bg-gray-900 border-2 border-gray-700 rounded-lg p-5 text-gray-100">
          <h2>{{$t('Work_lang')}}</h2>
          <ul class="flex flex-col list-inside list-disc">
            <li>{{$t('NL')}} - {{ $t('Lang_perfect') }}</li>
            <li>{{$t('EN')}} - {{ $t('Lang_perfect') }}</li>
            <li>{{$t('DE')}} - {{ $t('Lang_reasonble') }}</li>
          </ul>
        </div>
        <div class="w-full bg-gray-900 border-2 border-gray-700 rounded-lg p-5 text-gray-100">
          <h2>{{ $t('Work_program_lang') }}</h2>
          <div class="flex gap-1 font- flex-row flex-wrap">
            <span class="tag">C++</span>
            <span class="tag">C#</span>
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
            <span class="tag">PHP</span>
            <span class="tag">SQL</span>
            <span class="tag">Java</span>
            <span class="tag">Python</span>
            <span class="tag">Lua</span>
          </div>
        </div>
        <div class="w-full bg-gray-900 border-2 border-gray-700 rounded-lg p-5 text-gray-100">
          <h2>{{ $t('Work_Tools') }}</h2>
          <div class="flex gap-1 font- flex-row flex-wrap">
            <span class="tag">Visual Studio & (Code)</span>
            <span class="tag">Blender</span>
            <span class="tag">Git</span>
            <span class="tag">Docker</span>
            <span class="tag">Vue.js</span>
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">ASP.NET</span>
          </div>
        </div>
      </div>
    </main>
  </template>