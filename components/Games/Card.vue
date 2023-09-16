<template>
    <div v-if="game?.background_image">
      <img :src=game?.background_image :alt=game?.name>
    </div>
    <div v-else class="no-image">
      <p>
        No Image
      </p>
    </div>
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