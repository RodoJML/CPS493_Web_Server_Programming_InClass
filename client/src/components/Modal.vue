<script setup lang="ts">

const props = defineProps<{
    title?: string;
    body?: string;
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void;
}>();

</script>

<template>
    <div class="modal" :class="{ 'is-active': props.isOpen }">
        <div class="modal-background"></div>

        <div class="modal-card">

            <header class="modal-card-head">

                <p class="modal-card-title">
                    <slot name="header">{{ props.title }}</slot>
                </p>

                <button class="delete" aria-label="close" @click="emit('update:isOpen', false)"></button>

            </header>

            <section class="modal-card-body">
                <slot name="body1">{{ props.body }}</slot>
            </section>

            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>

    </div>
</template>

<style scoped></style>