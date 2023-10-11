<template>
    <NuxtLink :to="`/game/${game?.slug}`">
      <NuxtImg quality="40" format="webp" size="sm:50vw" loading="lazy" v-if="game?.background_image" :src=game?.background_image :alt=game?.name />
      <div v-else class="no-image">
      <p>
        No Image
      </p>
    </div>
    </NuxtLink>
    <p>
      {{ game?.name }}
    </p>
</template>

<script setup>
const props = defineProps({
  game: Object,
});
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>