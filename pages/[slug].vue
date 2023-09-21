<template>
    <div class="games">
      <p v-if="pending">
        <LoadingAnim/>
      </p>
      <div v-else class="details-container">
          <div class="banner">
              <img src="@/assets/images/rdr.jpg" alt="">
              <div class="details">
                  <Icon class="heart" name="ph:heart" size="2em"/>
                  <p class="title">
                      {{ gameInfo?.name }}
                  </p>
                  <div class="small-details">
                    <div class="developer">
                      <p>Developer(s):</p>
                      <p v-for="developer in gameInfo?.developers" :key="developer">
                        {{ developer.name }}
                      </p>
                    </div>
                    <div class="release-date">
                      <p>Release Date:</p>
                      <p>{{ gameInfo?.releaseDate }}</p>
                    </div>
                    <div class="genres">
                      <p>Genres:</p>
                      <ul>
                        <li v-for="genre in gameInfo?.genres" :key="genre.id">
                          {{ genre.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="buy-or-cart">
                    <NuxtLink class="cart">
                      <Icon name="solar:cart-large-4-outline" size="1.8em"/>
                    </NuxtLink>
                    <NuxtLink class="buy">
                      Buy Now
                    </NuxtLink>
                  </div>
              </div>
          </div>
          <div class="description">
            <h2 class="description-title">
              Description:
            </h2>
            <p v-html="formattedDescription"></p>
          </div>
          <div class="gallery">
            <h2 class="gallery-title">
              Gallery:
            </h2>
            <ul class="list">
              <li v-for="(image, index) in images" :key="index" @click="showCarousel(index)">
                <img :src="image" alt="">
              </li>
            </ul>
          </div>
          <div class="requirements-container">
            <h2>
              Requirements
            </h2>
            <div class="requirements">
              <p v-html="formattedMinimum"></p>
              <p v-html="formattedRecommended"></p>
            </div>
          </div>
          <Teleport to="body">
            <div class="carousel-images" :style="{ display: openCarousel ? 'block' : 'none' }">
              <div class="close">
                <Icon name="ph:x" size="2em" @click="closeCarousel" />
              </div>
              <div class="images-container">
                <Carousel v-model="currentSlide">
                  <Slide v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="" class="image-selected">
                  </Slide>
                </Carousel>
                  <div class="thumbs-container">
                    <ul class="thumber">
                      <li v-for="(image, index) in images" :key="index" @click="slideTo(index)">
                        <img :src="image" alt="" :class="{ 'active': index === currentSlide }">
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </Teleport>
      </div>
    </div>
</template>

<script setup>
import LoadingAnim from '@/components/LoadingAnim.vue';

const route = useRoute();
console.log(route.params.slug);



const images = ref([
  "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg",
  "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg",
  "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg",
  "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg",
  "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg",
  "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
])

const currentSlide = ref(0);
const openCarousel = ref(false);

const slideTo = ((index) => {
  currentSlide.value = index;
});

const showCarousel = ((index) => {
  openCarousel.value = true;
  currentSlide.value = index;
})

const closeCarousel = (() => {
  openCarousel.value = false;
})

const { data: game, pending } = await useFetch("https://api.rawg.io/api/games/red-dead-redemption-2", {
    method: "GET",
    headers:{
        "Content-Type": "application/json",
        "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    params:{
        key: import.meta.env.VITE_API_KEY
    }
})

console.log(pending.value);

const gameInfo = reactive({
  name: toRaw(game.value?.name),
  developers: toRaw(game.value?.developers),
  releaseDate: toRaw(game.value?.released),
  description: toRaw(game.value?.description),
  genres: toRaw(game.value?.genres),
  requirements: {
    minimum: toRaw(game.value?.platforms[0]?.requirements?.minimum),
    recommended: toRaw(game.value?.platforms[0]?.requirements?.recommended)
  }
})

// console.log(toRaw(gameinfo));

const description = gameInfo?.description;
const formattedDescription = description.replace(/\n/g, "<br>");

const minimum = gameInfo?.requirements?.minimum;
const formattedMinimum = minimum.replace(/\n/g, "<br>");

const recommended = gameInfo?.requirements?.recommended;
const formattedRecommended = recommended.replace(/\n/g, "<br>");
</script>

<style lang="scss">
.games{

  .details-container {
    padding: 100px;
    color: #d4d4d4;
    position: relative;
    top: -250px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
      
    .banner{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 60px;
      flex-wrap: wrap;

      img{
        width: 600px;
        aspect-ratio: 16/9;
        border-radius: 10px;
      }

      .details{
        min-width: 600px;
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
          }

          .release-date{
            display: flex;
            justify-content: center;
            column-gap: 5px;
          }

          .genres{
            display: flex;
            align-items: center;
            column-gap: 10px;

            ul{
              display: flex;
              column-gap: 10px;

              li{
                list-style: none;
                padding: 5px;
                border: 1px solid #b5b5b5;
                border-radius: 5px;
                transition: all 0.150s ease;
                
                &:hover{
                  background-color: #b5b5b5;
                  color: #000;
                  cursor: pointer;
                }
              }
            }
          }
        }

        .buy-or-cart{
          display: flex;
          justify-content: center;
          column-gap: 10px;
          width: 80%;

          .cart{
            width: 150px;
            height: 60px;
            background-color: #ff6000;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;

            svg{
              color: #d4d4d4;
              font-size: 1.3em;
            }
          }

          .buy{
            flex: auto;
            height: 60px;
            background-color: #ff6000;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            font-size: 1.3em;
            font-weight: 600;
            cursor: pointer;
          }
        }
      }
    }

    .description{
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }

    .gallery{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .list{
        display: flex;
        gap: 20px;;
        flex-wrap: wrap;

        li{
          list-style: none;
          width: calc(50% - 20px);

          img{
            width: 100%;
            border-radius: 8px;
          }
        }

        .thumber{
          display: flex;
          flex-wrap: wrap;
          width: 50%;
          gap: 20px;

          img{
            width: calc(50% - 30px);
          }
        }
      }
    }

    .requirements-container{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .requirements{
        display: flex;
        column-gap: 100px;

        p{
          line-height: 25px;
        }
      }
    }
  }
}

.carousel-images {
    width: 100vw;
    position: relative;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: none;

    &.active{
      display: block;
    }

    .close{
      position: absolute;
      top: 15px;
      right: 20px;
      color: #ff6000;
      cursor: pointer;
      z-index: 9999;
    }

    .images-container{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 15px;
      outline: none;
      overflow: auto;
      padding: 15px;
      background-color: #323232;

      .image-selected{
        width: 70%;
        border-radius: 10px;
        object-fit: cover;
      }

      .thumbs-container{
        display: flex;
        justify-content: center;

        .thumber{
          width: 100%!important;
          max-width: 1000px;
          display: flex;
          z-index: 1;
          justify-content: center;
          align-items: center;
          column-gap: 20px;

            li{
              width: 30%;
              list-style: none;
              border-radius: 7px;

              img{
                border-radius: 7px;
                width: 100%;
                margin: 0 5px;
                object-fit: cover;
                transition: all 0.150s ease;

                &.active {
                  transform: scale(1.1);
                }
              }
            }
        }
      }
    }
  }
</style>