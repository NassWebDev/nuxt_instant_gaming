<template>
    <div class="games">
        <div class="headline">
            <h3>
                Tendances
            </h3>
            <NuxtLink>
                Tout Voir
            </NuxtLink>
        </div>
        <ul>
            <li v-for="game in games" :id="game.name">
                <GamesCard
                :key="game.name"
                :game="game"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import GamesCard from '@/components/Games/Card.vue';

const {data: allgames} = await useFetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers:{
        "Client-ID": "y19n2sixh4hcbrzxn633dx98z671qk",
        "Authorization": "Bearer us2bxckqupcgkxwm3i1yo7la17x3rd"
    }
})

console.log(allgames.value);

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