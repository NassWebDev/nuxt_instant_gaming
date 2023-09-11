<template>
    <div class="trending-games">
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
                <TrendingGamesCard
                :key="game.name"
                :game="game"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import TrendingGamesCard from '@/components/Games/Card.vue';

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
    .trending-games{
        display: flex;
        flex-direction: column;
        margin: 20px 100px;

        .headline{
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3{
                color: #fff;
            }

            a{
                width: 100px;
                height: 40px;
                background-color: red;
                // padding: 10px 20px;
                background-color: #6d6d6d;
                color: #fff;
                border-radius: 7px;
                border: 1px solid #fff;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            li{
                width: calc(33.33333% - 30px);
                min-width: 0;
                list-style: none;
                margin: 15px;

                img{
                    width: 100%;
                    border-radius: 8px;
                }

                .game-info{
                    display: flex;
                    justify-content: space-between;

                    p{
                        color: #fff;
                        margin: 10px 0;
                    }
                }
            }
        }
    }
</style>