<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<style src="/src/assets/style-global.css"></style>

<template>
    <Navbar/>
    <RouterView></RouterView>
</template>