<template>
    <div class="description">
        <h2 class="description-title">
            Description:
        </h2>
        <p v-if="game?.description">
            {{ game?.description }}
        </p>
        <p v-else>
            N/A
        </p>
        <div class="tags">
            <p>
            User tags:
            </p>
            <ul v-if="game?.tags.length > 0" class="list-tags">
              <li v-for="tag in game?.tags" :key="tag">
                  <NuxtLink :to="`/tags/${tag.slug}`">
                    {{ tag.name }}
                  </NuxtLink>
              </li>
            </ul>
            <p v-else>
                N/A
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    game: Object
})

</script>

<style lang="scss">
.description{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .tags{
        display: flex;
        column-gap: 10px;

        .list-tags{
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-left: 10px;

          li{
            font-size: 11px;
            font-weight: 700;
            color: #999;
            padding: 5px;
            border: 1px solid #999;
            border-radius: 5px;
            transition: all 0.15s ease;
            text-transform: uppercase;

            a{
              text-decoration: none;
              color: #999;

              &:hover{
                color: #c5c5c5;
              }
            }

            &:hover{
              border-color: #c5c5c5;
              cursor: pointer;
            }  
          }
        }
      }
    }
</style>