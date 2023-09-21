<template>
    <div class="banner">
        <img :src="game?.image" alt="">
        <div class="details-game">
            <Icon class="heart" name="ph:heart" size="2em"/>
            <p class="title">
                {{ game?.name }}
            </p>
            <div class="small-details">
            <div class="developer">
                <p>Developer(s):</p>
                <p v-for="developer in game?.developers" :key="developer" v-if="game?.developers.length !== 0">
                    {{ developer.name }}
                </p>
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
                        {{ genre.name }}
                    </li>
                </ul>
                <p v-else>
                    N/A
                </p>
            </div>
            </div>
            <div class="buy-or-cart">
            <NuxtLink class="cart">
                <Icon name="solar:cart-large-4-outline" size="1.8em"/>
            </NuxtLink>
            <NuxtLink class="buy" :to="game?.website" v-if="game?.website">
                Buy Now
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    game: Object
})
</script>

<style lang="scss">
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

      .details-game{
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
                
                &:hover{
                  border-color: #c5c5c5;
                  color: #c5c5c5;
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
            text-decoration: none;

            &:visited{
                color:#d4d4d4;
            }

            &:focus{
                color:#d4d4d4;
            }
          }
        }
      }
    }
</style>