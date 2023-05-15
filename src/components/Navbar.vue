<style src="/src/assets/style-navbar.css"></style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav role="navigation" class="border-r-[1px] border-r-light-outline dark:border-r-dark-outline">
  <div id="menuToggle">


        <input type="checkbox" />
    

    <span class="bg-light-on-surface dark:bg-dark-on-surface"></span>
    <span class="bg-light-on-surface dark:bg-dark-on-surface"></span>
    <span class="bg-light-on-surface dark:bg-dark-on-surface"></span>
    

    <ul id="menu" class="bg-light-surface dark:bg-dark-surface
    border-r-[1px] border-r-light-outline dark:border-r-dark-outline">
      <a href="#" class="text-light-on-surface dark:text-dark-on-surface"><li>Home</li></a>
      <a href="#" class="text-light-on-surface dark:text-dark-on-surface"><li>Company</li></a>
      <a href="#" class="text-light-on-surface dark:text-dark-on-surface"><li>Tasks</li></a>
      <a href="#" class="text-light-on-surface dark:text-dark-on-surface"><li>Profile</li></a>

      <div class="profile-container">
        <div class="profile bg-light-on-primary">
            <span class="text-light-on-surface dark:text-dark-on-surface" id="surname">Vorname</span>
            <span class="text-light-on-surface dark:text-dark-on-surface" id="first_name">Nachname</span>
            <span class="text-light-on-surface dark:text-dark-on-surface" id="age">Alter</span>
            <span class="text-light-on-surface dark:text-dark-on-surface" id="pos">Position/Abteilung</span>
            <img src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-1024x1024.png"
            class="w-[64px] h-[64px] self-end">
        </div>
    </div>
    </ul>
    </div>
    
    
</nav>
</template>

<script>

</script>