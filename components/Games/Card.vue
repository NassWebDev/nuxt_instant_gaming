<template>
    <NuxtLink :to="`/game/${game?.slug}`">
      <img v-if="game?.background_image" :src=game?.background_image :alt=game?.name>
      <div v-else class="no-image">
      <p>
        No Image
      </p>
    </div>
    </NuxtLink>
    <div class="game-info">
        <p>
           {{ game?.name }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
  game: Object,
});
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>