<template>
    <div class="requirements-container" v-if="game?.hasPcPlatform">
        <h2>
            Requirements
        </h2>
        <div v-if="(formattedMinimum != undefined || formattedRecommended != undefined)" class="requirements">
            <p v-if="formattedMinimum" v-html="formattedMinimum"></p>
            <p v-if="formattedRecommended" v-html="formattedRecommended"></p>
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
      row-gap: 30px;

      .requirements{
        display: flex;
        column-gap: 100px;

        @media screen and (max-width: 650px) {
            flex-direction: column;
            row-gap: 20px;
        }

        p{
          width: calc(50% - 30px);
          line-height: 30px;
          font-size: 20px;

          @media screen and (max-width: 650px) {
            width: 100%;    
          }
        }
      }
    }
</style>