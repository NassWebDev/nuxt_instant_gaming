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
    <div>
      <div class="headline">
            <h3>
                Populaires
            </h3>
            <NuxtLink to="/populaires">
                Tout Voir
            </NuxtLink>
        </div>
      <BestRatingGamesList :number_of_games="9"/>
    </div>
    <div>
      <div class="headline">
            <h3>
                Prochaines Sorties
            </h3>
            <NuxtLink to="/next-release">
                Tout Voir
            </NuxtLink>
        </div>
      <NextReleaseGamesList />
    </div>
  </div>
</template>