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
import GamesCard from '@/components/Games/Card.vue';
import LoadingAnim from '@/components/LoadingAnim.vue';

const props = defineProps({
    number_of_games: Number,
    ordering: String,
    currentPage: Number,
    dates: String
})

const currentPage = toRef(props, 'currentPage')

const { data: allgames, pending } = await useFetch("https://api.rawg.io/api/games", {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
        key: import.meta.env.VITE_API_KEY,
        page: currentPage,
        page_size: props?.number_of_games,
        ordering: props?.ordering,
        dates: props?.dates
    },
    watch:[currentPage]
})
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>