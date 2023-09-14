<template>
    <ul class="list-games">
        <li v-for="game in toRaw(allgames?.results)" :id="game?.id">
            <GamesCard
            :key="game?.id"
            :game="game"
            />
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import GamesCard from '@/components/Games/Card.vue';

const props = defineProps({
    number_of_games: Number
})

console.log(props.number_of_games);

const currentPage = ref(1);

const {data: allgames} = await useFetch("https://api.rawg.io/api/games", {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
      key: import.meta.env.VITE_API_KEY,
      page: currentPage,
      page_size: props.number_of_games,
    },
    watch:[
        currentPage
    ]
})
console.log(toRaw(allgames.value?.results));
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>