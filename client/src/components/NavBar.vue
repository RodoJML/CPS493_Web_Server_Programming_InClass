<script setup lang="ts">
import {ref} from 'vue'
import LoginBadge from './LoginBadge.vue'
import { RouterLink } from 'vue-router'

const isMenuActive = ref(false);

function toggleMenu(){
    // .value access the value directly instead of the object
    // 90% you use ref, for all other you use reactive 
    isMenuActive.value = !isMenuActive.value;
    console.log({isMenuActive});
}

</script>


<template>
    <div>
        <nav class="navbar is-primary">
            <div class="container">

                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
                    </a>
                    <span class="navbar-burger" :class ="{'is-active': isMenuActive}" @click="toggleMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>

                <div id="navbar" class="navbar-menu" :class = "{'is-active': isMenuActive}">
                    <div class="navbar-start">

                        <RouterLink to="/" class="navbar-item">Home</RouterLink>
                        <RouterLink to="/about" class="navbar-item">About</RouterLink>
                        <RouterLink to="/products" class="navbar-item">Products</RouterLink>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Docs
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Overview
                                </a>
                                <a class="navbar-item">

                                    Modifiers
                                </a>
                                <a class="navbar-item">
                                    Columns
                                </a>
                                <a class="navbar-item">
                                    Layout
                                </a>
                                <a class="navbar-item">
                                    Form
                                </a>

                                <hr class="navbar-divider">
                                <a class="navbar-item">
                                    Elements
                                </a>
                                <a class="navbar-item">
                                    Components
                                </a>
                            </div>

                        </div>


                    </div>

                    <div class="navbar-end">

                        <LoginBadge />

                        <span class="navbar-item">
                            <a class="button">
                                <span class="icon">
                                    <i class="fa-brands fa-twitter"></i>
                                </span>
                                <span>Tweet</span>
                            </a>

                            <a class="button is-primary">
                                <span class="icon">
                                    <i class="fa-solid fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </span>
                    </div>
                </div>

            </div>


        </nav>
    </div>
</template>



<style scoped></style>




