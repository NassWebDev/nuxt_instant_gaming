<template>
    <div class="banner">
        <NuxtImg quality="40" format="webp" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" v-if="game?.image" :src="game?.image" alt="" />
        <div v-else class="no-image">
          <p>
            No Image
          </p>
        </div>
        <div class="details-game">
            <Icon v-if="!isFavorite" class="heart" name="ph:heart" size="2em" @click="addFavorite"/>
            <Icon v-else class="heart" name="ph:heart-fill" size="2em" @click="addFavorite"/>
            <p class="title">
                {{ game?.name }}
            </p>
            <div class="small-details">
              <div class="developer">
                  <p>Developer(s):</p>
                  <ul v-if="game?.developers.length !== 0" class="list-developers">
                    <li v-for="developer in game?.developers" :key="developer.id">
                      <NuxtLink :to="`/developer/${developer.slug}`">
                        {{ developer.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <p v-else>
                      N/A
                  </p>
              </div>
              <div class="release-date">
                  <p>Release Date:</p>
                  <p v-if="game?.releaseDate">
                      {{ game?.releaseDate }}
                  </p>
                  <p v-else>
                      N/A
                  </p>
              </div>
              <div class="genres">
                  <p>Genres:</p>
                  <ul v-if="game?.genres.length !== 0">
                      <li v-for="genre in game?.genres" :key="genre.id">
                          <NuxtLink :to="`/genre/${genre.slug}`">
                            {{ genre.name }}
                          </NuxtLink>
                      </li>
                  </ul>
                  <p v-else>
                      N/A
                  </p>
              </div>
            </div>
            <NuxtLink class="buy" :to="game?.website" v-if="game?.website">
                Buy Now
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    game: Object
})

const user = useSupabaseUser();
const userEmail = ref(user.value.email);

const { errorUserId, data: userId } = await useFetch(`/api/user/${userEmail.value}`)
if(errorUserId){
    console.log(errorUserId)
}

const userFavorites = ref(userId.value.favorites);
const isFavorite = ref(null);

if(userFavorites.value.includes(props.game.slug)){
  isFavorite.value = true;
}
else{
  isFavorite.value = false;
}

watch(isFavorite, async (newValue, oldValue) => {
  console.log(toRaw(newValue));
})

const id = userId.value.id;
const idString = id.toString();

const addFavorite = (async () => {
    const {data} = await useFetch(`/api/${idString}/favorites/${props.game.slug}/favorite`, ({
        method: 'PATCH',
        body: {
          favorites: props.game.slug,
        },
    }))
    console.log(toRaw(data.value.favorites));

    if(data){
      userFavorites.value = data.value.favorites;
      if(userFavorites.value.includes(props.game.slug)){
        isFavorite.value = true;
      }
      else{
        isFavorite.value = false;
      }
    }
})
</script>

<style lang="scss">
.banner{
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 60px;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
      margin-top: 100px;
    }

      img{
        width: 100%;
        max-width: 600px;
        aspect-ratio: 16/9;
        border-radius: 10px;
      }

      .no-image{
        width: 100%;
        max-width: 600px;
        aspect-ratio: 16/9;
        border-radius: 10px;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .details-game{
        width: 100%;
        max-width: 700px;
        color: #fff;
        border: transparent;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
        backdrop-filter: blur(60px) saturate(100%);
        background-image: linear-gradient(1turn,var(--color-dark),rgba(39,39,39,0) 70%);
        position: relative;
        
        .heart{
          position: absolute;
          top: 15px;
          right: 20px;
          color: #ff6000;
          fill: red;
          transition: all 0.150s ease;

          &:hover{
            cursor: pointer;
            transform: scale(1.1);
          }
        }

        .title{
          font-size: 30px;
          border-bottom: 2px solid #d4d4d4;
          padding: 10px 50px;
        }

        .small-details{
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          font-size: 18px;

          .developer{
            display: flex;
            justify-content: center;
            column-gap: 5px;

            .list-developers{
              
              li{
                list-style: none;

                a{
                  text-decoration: none;
                  color: #999;

                    &:hover{
                      color: #c5c5c5;
                    }
                }
              }
            }
          }

          .release-date{
            display: flex;
            justify-content: center;
            column-gap: 5px;
          }

          .genres{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            column-gap: 10px;

            ul{
              display: flex;
              column-gap: 10px;

              li{
                list-style: none;
                padding: 5px;
                color: #999;
                border: 1px solid #999;
                border-radius: 5px;
                transition: all 0.150s ease;
                
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

        .buy{
          width: 80%;
          height: 60px;
          background-color: #ff6000;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          font-size: 1.3em;
          font-weight: 600;
          cursor: pointer;
          color: #d4d4d4;
          text-decoration: none;
          transition: all 0.150s ease;

          &:hover{
              transform: scale(1.05);
          }

          &:visited{
              color:#d4d4d4;
          }

          &:focus{
              color:#d4d4d4;
          }
        }
      }
    }
</style>