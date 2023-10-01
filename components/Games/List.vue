<template>
    <ul class="list-games">
        <div v-if="pending">
            <LoadingAnim/>
        </div>
        <li v-else v-for="game in toRaw(allgames?.results)" :key="game?.id">
            <GamesCard
            :game="game"
            />
        </li>
    </ul>
</template>

<script setup>
const emit = defineEmits(['total-items']);

const props = defineProps({
    number_of_games: Number,
    ordering: String,
    currentPage: Number,
    dates: String,
    genre: String,
    tags: String,
    developer: String
})

const currentPage = toRef(props, 'currentPage');

const { data: allgames, pending } = await useFetchAllGames(currentPage, {
    page_size: props?.number_of_games,
    ordering: props?.ordering,
    dates: props?.dates,
    genres: props?.genre,
    tags: props?.tags,
    developers: props?.developer
})

if (allgames.value) {
    emit('total-items', allgames.value?.count);
}
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>