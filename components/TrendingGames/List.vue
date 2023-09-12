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

<style>
@import "@/assets/styles/list.scss";
</style>