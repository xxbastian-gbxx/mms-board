<style src="/src/assets/style-navbar.css"></style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    data: function () {
        return {
            isActive: false,
            isNotActive: true
        }
    }
}
</script>

<template>
    <header>
        <div class="menu-wrapper">
            <div class="fries-button menu-trigger">
                <label for="fries">
                    <input type="checkbox" id="fries">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </div>
    </header>
</template>

















<!-- <div class="bento" :class="{active: isActive},{is_not_active: isNotActive}" @click="isActive = !isActive; isNotActive = !isNotActive">
                
</div> -->