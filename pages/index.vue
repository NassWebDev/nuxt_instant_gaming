<script setup>
import TrendingGames from '@/components/TrendingGames.vue';
import GamesList from '@/components/Games/List.vue';

useHead({
  title: "Instant Gaming"
})
</script>

<template>
  <div>
    <TrendingGames />
    <div class="games">
      <div class="headline">
        <h3>
          Populaires
        </h3>
        <NuxtLink to="/populaires">
          Tout Voir
        </NuxtLink>
      </div>
      <div class="list">
        <GamesList
          :number_of_games="9"
        />
      </div>
    </div>
    <div class="games">
      <div class="headline">
        <h3>
          Prochaines Sorties
        </h3>
        <NuxtLink to="next-release">
          Tout Voir
        </NuxtLink>
      </div>
      <div class="list">
        <GamesList 
          :number_of_games="9"
          :ordering="'released'"
          :dates="formattedDate + ',' + formattedFutureDate"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>