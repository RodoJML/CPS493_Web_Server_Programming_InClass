<script setup lang="ts">
    import Modal from '@/components/Modal.vue';
    import { ref } from 'vue';
    import { state } from '@/model/generalModals';
</script>

<template>
    <Modal :is-open="state.isModalOpen" :title="state.title">
        <h1 class="title">{{ state.message }}</h1>
        // Whats the pound for? 
        <template #footer>
            <button class="button is-success">Save</button>
            <button class="button">Cancel</button>
        </template>
    </Modal>
</template>

<style scoped>

</style>