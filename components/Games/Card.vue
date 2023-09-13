<template>
    <img :src=game?.background_image :alt=game?.name>
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
</style>