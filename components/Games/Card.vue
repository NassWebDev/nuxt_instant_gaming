<template>
    <img src="@/assets/images/rdr.jpg" :alt=game.name>
        <div class="game-info">
            <p>
            {{ game.name }}
        </p>
        <p>
            {{ game.price }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
  game: Array,
});
</script>

<style lang="scss">
    .game{
        width: calc(33.33333% - 30px);
        
        a{
            width: 100%;
            background-image: url("@/assets/images/rdr.jpg");
            background-size: cover;
        }
    }
</style>