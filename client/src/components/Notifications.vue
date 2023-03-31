<script setup lang="ts">
import { useSession } from "@/model/session"
import { ref    } from "vue";
const session = useSession();
const isActive = ref(false);
</script>

<template>
    <div class="notifications">
        <button class = "button is-primary" @click="isActive = !isActive">
            <span class="icon">
                <i class="fas fa-bell fa-lg" :class="{'fa-beat-fade' : session.isLoading}"></i>
            </span>
        </button>
        <div class="notification-list" v-show="isActive">
            <div v-for="msg in session.messages" :class="`notification is-${msg.type}`">
                <button class="delete"></button>
                {{  msg.msg }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .notifications {
        position: relative;
    }
    .notification-list {
        position: absolute;
        margin-top: 5px;
        width: 300px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
        z-index: 100;
        overflow-y: auto;
    }
    .notification-list.active {
        display: block;
    }
    .notification {
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }
    .notification:last-child {
        border-bottom: none;
    }
    .notification .delete {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

</style>


