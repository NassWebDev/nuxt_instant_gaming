<template>
  <div class="main-container">
      <NavBar />
      <!-- <TrendingGames /> -->
      <slot />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import TrendingGames from '@/components/TrendingGames.vue';
</script>

<style>
  .main-container{
      background-color: #272727;
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      min-height: 100vh;
  }
</style>