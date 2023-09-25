<template>
  <div>
    <TrendingGames />
    <div class="games">
      <div class="headline">
        <h3>
          Popular
        </h3>
        <NuxtLink to="/populaires">
          See All
        </NuxtLink>
      </div>
      <div class="list">
        <GamesList
          :number_of_games="9"
          ordering="-added"
          dates="2020-01-01,2023-09-25"
        />
      </div>
    </div>
    <div class="games">
      <div class="headline">
        <h3>
          Next Releases
        </h3>
        <NuxtLink to="next-release">
          See All
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

<script setup>
import TrendingGames from '@/components/TrendingGames.vue';
import GamesList from '@/components/Games/List.vue';

useHead({
  title: "Instant Gaming"
})
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>