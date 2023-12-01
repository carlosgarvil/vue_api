<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
</script>

<template>
  <header class="mb-5">

    <div class="row">
      
      <div class="col-2 col-md-1">
        <img class="logo img-fluid" src="./assets/logo.svg"  alt="Vue 3 + Vite">
      </div>
    <div class="col-10 col-md-11">
      <nav class="nav nav-tabs">
        <li class="nav-item"><RouterLink to="/" class="nav-link">Home</RouterLink></li>
        <li class="nav-item"><RouterLink to="/get" class="nav-link">GetApi</RouterLink></li>
        <li class="nav-item"><RouterLink to="/post" class="nav-link">PostApi</RouterLink></li>
        <li class="nav-item"><RouterLink to="/put" class="nav-link">PutApi</RouterLink></li>
        <li class="nav-item"><RouterLink to="/delete" class="nav-link">DeleteApi</RouterLink></li>
        
      </nav>
    </div>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
  
</template>

<style scoped>
</style>
