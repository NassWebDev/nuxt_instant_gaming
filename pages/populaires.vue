<template>
    <div class="games">
      <h2>
        Popular
      </h2>
        <div class="list">
          <GamesList
            :number_of_games="21"
            :currentPage="currentPage"
            ordering="-added"
            dates="2021-01-01,2023-09-25"
            @total-items="getCount"
          />
          <vue-awesome-paginate
            :total-items="count"
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

const currentPage = ref(1);

const count = ref(0);

const getCount = ((value) => {
  count.value = value;
})

const onClickHandler = (page) => {
    currentPage.value = page;
    window.scrollTo(0, 0);
}
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
@import "@/assets/styles/pagination.css";
</style>