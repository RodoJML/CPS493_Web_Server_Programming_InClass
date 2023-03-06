<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Flyout from './components/Flyout.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <NavBar />
    </div>
    
  </header>

  <RouterView />
  <Flyout />
  
</template>

<style scoped>

</style>
