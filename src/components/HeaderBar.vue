<script setup>
import HamburgerMenu from './HamburgerMenu.vue'
</script>

<template>
  <header class="flex flex-col">
      <HamburgerMenu ref="">
        <div class="header-wrapper">
          <div class="extra-gap">
            <a class="carousel-button" @click="previousSlide">🡸</a>
            <a href="./assets/cv.pdf" class="header-item out-item">{{ $t('CV') }}</a>
            <router-link class="header-item" to="/projects">{{ $t('MyWork') }}</router-link>
          </div>
          <router-link class="header-item" to="/">Home</router-link>
          <div class="extra-gap">
            <router-link to="/contact" class="header-item">Contact</router-link>
            <router-link to="/about" class="header-item out-item">{{ $t('About') }}</router-link>
            <a class="carousel-button" @click="nextSlide">🡺</a>
          </div>
        </div>
      </HamburgerMenu>
  </header>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
  gap: 4em;
}

a {
  text-decoration: none;
}

.extra-gap {
  display: flex;
  gap: 2em;
}

.carousel-button {
  cursor: pointer;
  font-size: 1em;
  color: rgb(0, 0, 0);
  /* TODO: Change me ^ */
}

/* Responsiveness */

@media (min-width: 402px) {
  .carousel-button {
    display: none;
  }
}

@media (max-width: 402px) {
  /* Items that appear outside of the header */
  .out-item {
    display: none;
  }
}
</style>
