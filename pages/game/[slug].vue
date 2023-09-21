<template>
      <div class="details-container">
        <DetailsBanner :game="gameInfo"/>
        <DetailsDescription :game="gameInfo"/>
        <DetailsGallery :game="gameInfo"/>
        <DetailsRequirements :game="gameInfo"/>
      </div>
</template>

<script setup>
import DetailsBanner from '@/components/Details/Banner.vue';
import DetailsDescription from '@/components/Details/Description.vue';
import DetailsGallery from '@/components/Details/Gallery.vue';
import DetailsRequirements from '@/components/Details/Requirements.vue';

const route = useRoute();
console.log(route.params.slug);

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

const { data: gameImages } = await useFetch(`https://api.rawg.io/api/games/${route.params.slug}/screenshots`, {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
        key: import.meta.env.VITE_API_KEY
    }
})

const pcRequirements = toRaw(game.value?.platforms?.find(platform => platform.platform.slug === 'pc').requirements);

const gameInfo = reactive({
  name: toRaw(game.value?.name),
  image: toRaw(game.value?.background_image),
  allImages: toRaw(gameImages.value?.results),
  developers: toRaw(game.value?.developers),
  releaseDate: toRaw(game.value?.released),
  website: toRaw(game.value?.website),
  description: toRaw(game.value?.description_raw),
  tags: toRaw(game.value?.tags),
  genres: toRaw(game.value?.genres),
  requirements: {
    minimum: toRaw(pcRequirements.minimum),
    recommended: toRaw(pcRequirements.recommended)
  }
})
</script>

<style lang="scss">
  .details-container {
    padding: 100px 17%;
    color: #d4d4d4;
    position: relative;
    top: -250px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
</style>