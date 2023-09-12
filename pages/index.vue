<script setup>
import NavBar from '@/components/NavBar.vue'
import TrendingGames from '@/components/TrendingGames.vue';
import TrendingGamesList from '@/components/TrendingGames/List.vue';
import PreordersGamesList from '@/components/PreordersGames/List.vue';

useHead({
  title: "Instant Gaming"
})
</script>

<template>
  <div class="main-container">
    <NavBar />
    <TrendingGames />
    <TrendingGamesList />
    <PreordersGamesList />
  </div>
</template>

<style>
  .main-container{
    background-color: #272727;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
</style>