<template>
    <div class="imageTrending" :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const image = ref(null);

const { data: trendingGame } = await useFetch(`https://api.rawg.io/api/games`, {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
        key: import.meta.env.VITE_API_KEY
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

if(router.currentRoute.value.path === `/game/${route.params.slug}`){
    image.value = game.value?.background_image_additional;
}
else{
    if(trendingGame.value?.results[0]?.background_image_additional){
        image.value = trendingGame.value?.results[0]?.background_image_additional;
    }
    else{
        image.value = trendingGame.value?.results[0]?.background_image;
    }
}
</script>

<style lang="scss">
    .imageTrending{
        height: 80vh;
        // background-image: url("@/assets/images/rdr.jpg");
        background-size: cover;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);


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
    }
</style>