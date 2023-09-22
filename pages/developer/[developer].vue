<template>
    <div class="games">
      <h2>
        {{transformedDeveloper}}
      </h2>
      <div class="list">
        <GamesList :number_of_games="21" :currentPage="currentPage" :developer="developer" @total-items="getCount"/>
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
  
  const route = useRoute();
  
  console.log(route.params.developer);
  
  const developer = ref(route.params.developer)
  
  const transformedDeveloper = developer.value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  
  console.log(toRaw(developer.value));
  
  definePageMeta({
    layout: "custom"
  })
  
  const currentPage = ref(1);

  const count = ref(0);

    const getCount = ((value) => {
    count.value = value;
    })
  
  const onClickHandler = (page) => {
    currentPage.value = page;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  </script>