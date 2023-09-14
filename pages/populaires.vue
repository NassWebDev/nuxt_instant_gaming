<template>
    <div class="games">
        <BestRatingGamesList :number_of_games="30"/>
        <vue-awesome-paginate
            :total-items="12600"
            :items-per-page="props.number_of_games"
            :max-pages-shown="3"
            v-model="currentPage"
            :on-click="onClickHandler"
        />
    </div>
</template>

<script setup>

import BestRatingGamesList from '@/components/BestRatingGames/List.vue';

const currentPage = ref(1);

const onClickHandler = (page) => {
    currentPage.value = page;
}
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
.games{
  margin-top: 150px;
}
.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>