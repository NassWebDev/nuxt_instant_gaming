<template>
  <div class="games">
    <h2>
      {{transformedGenre}}
    </h2>
    <div class="list">
      <GamesList :number_of_games="21" :currentPage="currentPage" :genre="genreGame"/>
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

const route = useRoute();

console.log(route.params.genre);

const genreGame = ref(route.params.genre)

const transformedGenre = genreGame.value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

console.log(toRaw(genreGame.value));

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