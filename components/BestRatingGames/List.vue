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
            <li v-for="game in allgames?.results" :id="game?.id">
                <GamesCard
                :key="game?.id"
                :game="game"
                />
            </li>
        </ul>
        <vue-awesome-paginate
            :total-items="12600"
            :items-per-page="9"
            :max-pages-shown="3"
            v-model="currentPage"
            :on-click="onClickHandler"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import GamesCard from '@/components/Games/Card.vue';

const currentPage = ref(1);

const onClickHandler = (page) => {
    currentPage.value = page;
    console.log(currentPage.value);
}

const {data: allgames} = await useFetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page=${currentPage.value}&page_size=9`, {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        "Access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
    },
    watch:[
        currentPage
    ]
})

console.log(allgames.value?.results);

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
.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>