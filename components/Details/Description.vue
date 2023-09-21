<template>
    <div class="description">
        <h2 class="description-title">
            Description:
        </h2>
        <p>
            {{ game?.description }}
        </p>
        <div class="tags">
            <p>
            User tags:
            </p>
            <ul class="list-tags">
            <li v-for="tag in game?.tags" :key="tag">
                {{ tag.name }}
            </li>
            </ul>
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

            &:hover{
              border-color: #c5c5c5;
              color: #c5c5c5;
              cursor: pointer;
            }
          }
        }
      }
    }
</style>