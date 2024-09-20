<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <!-- This should be global, but it works -->
  <main style="justify-content: center;">
    <div class="main-rect rounded-t-3xl">
      <div class="main-info">
        <h1 class="text-home">{{ $t('Home_Title') }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mauris augue sed egestas vel. Egestas cursus sit
          est faucibus a tellus. Ac viverra odio quam ante aliquam nunc hendrerit. Vel varius eget
          adipiscing eu nisi donec viverra egestas. Condimentum faucibus tortor mi semper arcu elit.
          Quis morbi urna nullam malesuada. Facilisi scelerisque rhoncus sed habitant morbi.
        </p>
        <div class="links">
          <router-link to="/projects">{{ $t('MyWork') }}</router-link>
          <router-link to="/about">{{ $t('About') }}</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="desk-info">
        <h2>{{ $t('Home_Latest') }}</h2>
        <!-- Temp -->
        <project-card title="Zuul" image="https://www.shareicon.net/data/512x512/2015/12/01/680652_map_512x512.png"/>
        <project-card title="Zuul" image="https://www.shareicon.net/data/512x512/2015/12/01/680652_map_512x512.png"/>
      </div>
    </div>
  </main>
</template>

<style>

.main-rect {
  width: 70vw;
  height: 100%;
  background-color: #dd5353;
  display: flex;
  padding: 4em;
  justify-content: space-between;
}

.main-info {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  gap: 2em;
}

.desk-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.links {
  display: flex;
  gap: 2em;
  margin-top: 20%;
}

p {
  font-size: 18px;
}

a {
  color: var(--color-text);
}

a:hover {
  text-decoration: underline;
}

.text-home {
  font-size: 2em;
  font-weight: bold;
  color: var(--color-text);
  /* text-align: center; */
  margin: 0;
  padding: 0;
}

/* Responsiveness */

@media (max-width: 1023px) {
  .desk-info {
    display: none;
  }

  .main-info {
    max-width: 100%;
  }
}

@media (max-width: 512px) {
  .main-rect {
    width: 100%;
    padding: 2em;
  }

  main {
    padding: 2em 2em 2em 2em;
  }

  p {
    font-size: 16px;
  }
}
</style>
