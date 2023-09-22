<template>
    <div class="gallery">
        <h2 class="gallery-title">
            Gallery:
        </h2>
        <ul class="list">
            <li v-for="(image, index) in game?.allImages" :key="index" @click="showCarousel(index)">
                <img :src="image.image" alt="">
            </li>
        </ul>
        <Teleport to="body">
            <div class="carousel-images" :style="{ display: openCarousel ? 'block' : 'none' }">
              <div class="close">
                <Icon name="ph:x" size="2em" @click="closeCarousel" />
              </div>
              <div class="images-container">
                <Carousel v-model="currentSlide">
                  <Slide v-for="(image, index) in game?.allImages" :key="image.id">
                    <img :src="image.image" alt="" class="image-selected">
                  </Slide>
                </Carousel>
                  <div class="thumbs-container">
                    <ul class="thumber">
                      <li v-for="(image, index) in game?.allImages" :key="index" @click="slideTo(index)">
                        <img :src="image.image" alt="" :class="{ 'active': index === currentSlide }">
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
const props = defineProps({
    game: Object
})

const currentSlide = ref(1);
const openCarousel = ref(false);

const showCarousel = ((index) => {
  openCarousel.value = true;
  currentSlide.value = index;
})

const slideTo = ((index) => {
  currentSlide.value = index;
});

const closeCarousel = (() => {
  openCarousel.value = false;
})
</script>

<style lang="scss">
.gallery{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .list{
        display: flex;
        justify-content: center;
        gap: 20px;;
        flex-wrap: wrap;

        li{
          list-style: none;
          width: calc(50% - 20px);

          img{
            width: 100%;
            border-radius: 8px;
            aspect-ratio: 16/9;
            cursor: pointer;
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
        aspect-ratio: 16/9;
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
                aspect-ratio: 16/9;
                cursor: pointer;

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