<template>
  <TrendingGames /> 
  <div class="details-container">
    <DetailsBanner :game="gameInfo"/>
    <DetailsDescription :game="gameInfo"/>
    <DetailsGallery :game="gameInfo"/>
    <DetailsRequirements :game="gameInfo"/>
    <!-- <DetailsComments :slug="slug"/> -->
  </div>
</template>

<script setup>
const route = useRoute();

const { slug } = route.params;

const {data: game} = await useFetchGameDetails(slug);
const {data: gameImages} = await useFetchGameImages(slug);

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
  align-items: center;
  row-gap: 50px;

  @media screen and (max-width: 650px) {
    align-items: normal;
  }
}
</style>