<template>
  <div class="games">
    <h2>
      Prochaines Sorties
    </h2>
    <div class="list">
      <GamesList :number_of_games="21" :currentPage="currentPage" :ordering="'released'" :dates="formattedDate + ',' + formattedFutureDate"/>
      <vue-awesome-paginate
          :total-items="150"
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
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
@import "@/assets/styles/pagination.css";
</style>