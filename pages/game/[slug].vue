<template>
  <TrendingGames /> 
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

const hasPcPlatform = toRaw(game.value.platforms.find(platform => platform.platform.slug === 'pc'));

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
  hasPcPlatform: hasPcPlatform,
  requirements: null
})

if (hasPcPlatform !== undefined && hasPcPlatform.requirements !== undefined) {
  const pcRequirements = toRaw(hasPcPlatform.requirements);
  gameInfo.requirements = {
    minimum: toRaw(pcRequirements?.minimum) || null,
    recommended: toRaw(pcRequirements?.recommended) || null
  };
}
</script>

<style lang="scss">
  .details-container {
    padding: 100px 10%;
    color: #d4d4d4;
    position: relative;
    top: -250px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
</style>