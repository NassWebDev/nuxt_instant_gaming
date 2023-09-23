<template>
    <div class="requirements-container" v-if="game?.hasPcPlatform">
        <h2>
            Requirements
        </h2>
        <div v-if="(formattedMinimum || formattedRecommended)" class="requirements">
            <p v-html="formattedMinimum"></p>
            <p v-html="formattedRecommended"></p>
        </div>
        <p v-else>
            N/A
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    game: Object
})

const minimum = props?.game?.requirements?.minimum;
const formattedMinimum = minimum?.replace(/\n/g, "<br>");

const recommended = props?.game?.requirements?.recommended;
const formattedRecommended = recommended?.replace(/\n/g, "<br>");
</script>

<style lang="scss">
    .requirements-container{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .requirements{
        display: flex;
        column-gap: 100px;

        p{
          width: calc(50% - 30px);
          line-height: 30px;
          font-size: 20px;
        }
      }
    }
</style>