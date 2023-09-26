<template>
  <div class="container-games">
    <div class="games">
      <h2>
        {{transformedGenre}}
      </h2>
      <div class="list">
        <GamesList
          :number_of_games="21"
          :currentPage="currentPage"
          :genre="genreGame"
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
  </div>
</template>

<script setup>
import GamesList from '@/components/Games/List.vue';

const route = useRoute();

const genreGame = ref(route.params.genre)

const transformedGenre = genreGame.value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

const currentPage = ref(1);

const count = ref(0);

const getCount = ((value) => {
  count.value = value;
})

const onClickHandler = (page) => {
  currentPage.value = page;
  console.log(currentPage.value);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>