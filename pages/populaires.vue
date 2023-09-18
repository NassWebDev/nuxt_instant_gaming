<template>
    <div class="games">
      <h2>
        Jeux Populaires
      </h2>
        <div class="list">
          <GamesList :number_of_games="21" :currentPage="currentPage"/>
          <vue-awesome-paginate
              :total-items="10000"
              :items-per-page="21"
              :max-pages-shown="3"
              v-model="currentPage"
              :on-click="onClickHandler"
          />
        </div>
    </div>
</template>

<script setup>
import GamesList from '@/components/Games/List.vue';

definePageMeta({
  layout: "custom"
})

const currentPage = ref(1);

const onClickHandler = (page) => {
    currentPage.value = page;
    console.log(currentPage.value);
    window.scrollTo(0, 0);
}
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
@import "@/assets/styles/pagination.css";
</style>