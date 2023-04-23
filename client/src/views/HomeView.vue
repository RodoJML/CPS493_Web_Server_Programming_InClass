<script setup lang="ts">
  import Modal from '../components/Modal.vue'
  import { ref } from 'vue';
  const isOpen = ref(false);
</script>

<template>
  <main>
    <h1 class="title">
      This is our home page
    </h1>

    <p>
      <button class="button" @click="isOpen = !isOpen">Open Modal</button>
    </p>

    <Modal v-model:is-open="isOpen" >

      <template #header>
        <h1 class="title">Some content in the slot</h1>
      </template>

      <template #body1>
        <p class="body">What is going on</p> 
      </template>

    </Modal>

  </main>
</template>
