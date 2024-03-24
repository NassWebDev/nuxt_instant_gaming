<template>
    <!-- <div v-if="image" class="imageTrending" :style="{ backgroundImage: 'url(' + image + ')' }"> -->
    <NuxtImg quality="40" format="webp" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" v-if="image" :src="image" alt="imageTrending"/>
    <div v-else class="no-image">
      <p>
        No Image
      </p>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const image = ref(null);

const trendingGame = ref(null);

const props = defineProps({
    ordering: String,
    dates: String,
    thegame: String
})

if (props.thegame) {
    const { data: aGame } = await useFetch(`https://api.rawg.io/api/games/${props.thegame}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        params:{
            key: import.meta.env.VITE_API_KEY
        }
    })
    trendingGame.value = aGame.value;
    console.log(trendingGame.value);
}

const { data: allTrendingGames } = await useFetch(`https://api.rawg.io/api/games`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        params:{
            key: import.meta.env.VITE_API_KEY,
            ordering: props.ordering,
            dates: props.dates
        }
    })

const { data: game } = await useFetch(`https://api.rawg.io/api/games/${route.params.slug}`, {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
        key: import.meta.env.VITE_API_KEY
    }
})

console.log(allTrendingGames.value?.results[0]);

if(router.currentRoute.value.path === `/game/${route.params.slug}`){
    image.value = game.value?.background_image_additional;
}
else if(props.thegame){
    console.log(trendingGame.value);
    image.value = trendingGame.value?.background_image;
}
else{
    if(allTrendingGames.value?.results[0]?.background_image_additional){
        image.value = allTrendingGames.value?.results[0]?.background_image_additional;
    }
    else{
        image.value = allTrendingGames.value?.results[0]?.background_image;
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        object-fit: cover;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        aspect-ratio: 16/5;

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8));
            pointer-events: none;
        }

        @media screen and (max-width: 1000px) {
            aspect-ratio: 11/5;
        }
    }

    .no-image{
        height: 80vh;
        border-radius: 8px;
        aspect-ratio: 16/9;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
                    
        p{
            color: #fff;
        }
    }
</style>