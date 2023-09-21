<template>
    <div class="details-container">
        <!-- <div class="banner">
            <img src="@/assets/images/rdr.jpg" alt="">
            <div class="details">
              <Icon class="heart" name="ph:heart" size="2em"/>
                <p class="title">
                    Red Dead Redemption 2
                </p>
                <div class="small-details">
                  <div class="developer">
                    <p>Developer:</p>
                    <p>Rockstar Games</p>
                  </div>
                  <div class="release-date">
                    <p>Release Date:</p>
                    <p>26/10/2018</p>
                  </div>
                  <div class="genres">
                    <p>Genres:</p>
                    <ul>
                      <li>
                        Action
                      </li>
                      <li>
                        Adventure
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
          <p class="description-title">
            Description:
          </p>
          <div class="description-content">
            <p>America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. </p>\n<p>After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.</p>\n<p>From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.</p>
          </div>
        </div>
        <div class="gallery">
          <p class="gallery-title">
            Gallery:
          </p>
          <div class="list">
            <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
            <div class="thumber">
              <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
              <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
              <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
              <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
            </div>
          </div>   
        </div> -->
        <div class="images-container">
          <img class="image-selected" src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
            <div class="thumbs-container">
              <div class="thumber">
                <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
                <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
                <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
                <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
                <img src="https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg" alt="">
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
  const descriptionContent = document.querySelector('.description-content');
  const descriptionWithN = descriptionContent.textContent;
  console.log(descriptionWithN);
  const descriptionWithoutN = descriptionWithN.replace(/\n/g, '');
  console.log(descriptionWithoutN);
  descriptionContent.textContent = descriptionWithoutN;
})
</script>

<style lang="scss">
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

    .description-title{
      font-size: 18px;
    }
  }

  .gallery{
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .list{
      display: flex;
      column-gap: 20px;

      img{
        width: 50%;
        border-radius: 8px;
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

  .images-container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    outline: none;
    overflow: auto;
    padding: 15px;
    background-color: #323232;

    .thumbs-container{
      display: flex;
      justify-content: center;

      .thumber{
        width: 100%!important;
        max-width: 800px;
        display: flex;
        z-index: 1;
        justify-content: center;
        align-items: center;

        img{
          border-radius: 7px;
          width: 20%;
          margin: 0 5px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>