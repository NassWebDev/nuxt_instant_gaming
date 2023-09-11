<script setup>
import NavBar from '@/components/NavBar.vue'
import TrendingGames from '@/components/TrendingGames.vue';
import TrendingGamesList from '@/components/TrendingGames/List.vue';

useHead({
  title: "Instant Gaming"
})
</script>

<template>
  <div class="main-container">
    <NavBar />
    <TrendingGames />
    <TrendingGamesList />
  </div>
</template>

<style>
  .main-container{
    background-color: #272727;
  }
</style>