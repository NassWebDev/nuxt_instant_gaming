<template>
    <div class="games">
        <div class="headline">
            <h3>
                Prochaines Sorties
            </h3>
            <NuxtLink>
                Tout Voir
            </NuxtLink>
        </div>
        <ul>
            <li v-for="game in allgames.results" :id="game?.id">
                <GamesCard
                :key="game?.id"
                :game="game"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import GamesCard from '@/components/Games/Card.vue';

const {data: allgames} = await useFetch(`https://api.rawg.io/api/games?key=24fe4ee5d92c4643849bd9a18943bafe&ordering=released&page_size=9`, {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": "Token f1e9244e5cfaec97e723f5b48967f821a555ec23"
    }
})

const games = ref([
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        price: "59.99$",
        image: "@/assets/images/rdr.jpg"
    }
])
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>