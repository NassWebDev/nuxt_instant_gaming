<script setup>
import TrendingGames from '@/components/TrendingGames.vue';
import BestRatingGamesList from '@/components/BestRatingGames/List.vue';
import NextReleaseGamesList from '@/components/NextReleaseGames/List.vue';

useHead({
  title: "Instant Gaming"
})
</script>

<template>
  <div>
    <TrendingGames />
    <BestRatingGamesList />
    <NextReleaseGamesList />
  </div>
</template>