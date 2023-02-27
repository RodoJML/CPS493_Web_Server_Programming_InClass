<script setup lang="ts"></script>
</script>

<template>
    <div>
        <nav class="navbar is-primary">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/assets/Bulma%20Logo%20White.png"
                        alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

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
        </nav>
    </div>
</template>



<style scoped></style>




