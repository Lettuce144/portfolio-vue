<script setup>
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const isMenuOpen = ref(true);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// 768px width
const {width} = useWindowSize();

</script>

<template>
    <Transition name="slide">
        <slot v-if="isMenuOpen || width >= 768"></slot>
    </Transition>

    <div class="flex self-center p-4 md:hidden">
        <button @click="toggleMenu" value="hamburger" class="flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400">
            <span class="text-xl text-center" :class="{'rotate-180': isMenuOpen}">🢁</span>
        </button>
    </div>
</template>

<style scoped>
.slide-enter-active{
    animation: slide 0.4s;
}
.slide-leave-active{
    animation: slide 0.4s reverse;
}

@keyframes slide {
    0% {
        transform: translateY(-75vh);
    }
    50% {
        transform: translateY(-50vh);
    }
    100% {
        transform: translateY(0);
    }
}
</style>