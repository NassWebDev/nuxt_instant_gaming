<template>
  <div class="container-games">
    <TrendingGames 
      ordering="-added"
      dates="2021-01-01,2023-09-25"
    />
    <div class="games">
      <div class="headline">
        <h3>
          Popular
        </h3>
        <NuxtLink to="/populaires">
          See All
        </NuxtLink>
      </div>
      <div class="list">
        <GamesList
          :number_of_games="9"
          ordering="-added"
          dates="2021-01-01,2023-09-25"
        />
      </div>
    </div>
    <div class="games">
      <div class="headline">
        <h3>
          Next Releases
        </h3>
        <NuxtLink to="next-release">
          See All
        </NuxtLink>
      </div>
      <div class="list">
        <GamesList 
          :number_of_games="9"
          :ordering="'released'"
          :dates="formattedDate + ',' + formattedFutureDate"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TrendingGames from '@/components/TrendingGames.vue';
import GamesList from '@/components/Games/List.vue';

useHead({
  title: "Instant Gaming"
})

const user = useSupabaseUser();

onMounted(async() => {
      if(user) {
        const userEmail = user.value?.email;
        const userName = user.value?.user_metadata?.full_name;

        const {error, data} = await useFetch(`/api/user/${userEmail}`);

        if(error.value) {
            console.log(error.value)
        }

        if(!data.value) {
            const {errorFetch} = await useFetch('/api/user/user', {
            method: 'POST',
            body: {
                email: userEmail,
                userName: userName,
                dateOfBirth: new Date().toISOString().split('T')[0]
            }
            })
            if (errorFetch) {
            console.log(errorFetch);
            }
        }
    }
})
</script>

<style lang="scss">
@import "@/assets/styles/list.scss";
</style>