<script setup>
import ViewBlock from './ViewBlock.vue';
</script>


<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-0 m-0">
        <ViewBlock :title="$t('MyWork')" link="/work" :description="$t('MyWork_Description')"/>
        <ViewBlock :title="$t('Projects')" link="/projects" :description="$t('Projects_Description')"/>
        <ViewBlock :title="$t('Contact_Block')" link="/contact" :description="$t('Contact_Description')"/>
        <ViewBlock :title="$t('About')" link="/about" :description="$t('About_Description')"/>
    </div>
</template>