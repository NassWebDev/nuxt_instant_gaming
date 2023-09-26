<template>
    <div class="gallery">
        <h2 class="gallery-title">
            Gallery:
        </h2>
        <ul class="list" v-if="game?.allImages.length > 0">
            <li v-for="(image, index) in game?.allImages" :key="index" @click="showCarousel(index)">
                <img :src="image.image" alt="">
            </li>
        </ul>
        <Carousel :items-to-show="1.5" v-model="currentSlide" v-if="game?.allImages.length > 0">
          <Slide v-for="image in game?.allImages" :key="image.id" @click="showCarousel(index)">
            <img :src="image.image" alt="" class="image-selected">
          </Slide>
        </Carousel>
        <p v-else>
            No Image
        </p>
        <Teleport to="body">
            <div v-if="game?.allImages" class="carousel-images" :style="{ zIndex: openCarousel ? '9999' : '-9999' }">
              <div class="close">
                <Icon name="ph:x" size="2em" @click="closeCarousel" />
              </div>
                <div class="selected">
                  <Carousel v-model="currentSlide">
                    <Slide v-for="image in game?.allImages" :key="image.id">
                      <img :src="image.image" alt="" class="image-selected">
                    </Slide>
                  </Carousel>
                </div>
                <div class="images-container">
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

const currentSlide = ref(0);
const openCarousel = ref(false);

const bodyRef = ref(null);

const showCarousel = ((index) => {
  openCarousel.value = true;
  currentSlide.value = index;
  setBodyOverflow(true);
})

const slideTo = ((index) => {
  currentSlide.value = index;
});

const closeCarousel = (() => {
  openCarousel.value = false;
  currentSlide.value = 0;
  setBodyOverflow(false);
})

const setBodyOverflow = (overflowHidden) => {
  if (bodyRef.value) {
    if (overflowHidden) {
      bodyRef.value.classList.add('overflow-hidden');
    } else {
      bodyRef.value.classList.remove('overflow-hidden');
    }
  }
}

onMounted(() => {
  bodyRef.value = document.body;
  if (openCarousel.value) {
    setBodyOverflow(true);
  }
});

onBeforeUnmount(() => {
  setBodyOverflow(false);
});
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}

.gallery{
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .list{
        display: flex;
        justify-content: center;
        gap: 20px;
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

        @media screen and (max-width: 650px) {
          display: none;
        }
      }

      .carousel{
        display: none;

        li{
          padding: 15px;

          .image-selected{
            min-width: 70%;
            border-radius: 5px;
            object-fit: cover;
            aspect-ratio: 16/9;
          }
        }

        @media screen and (max-width: 650px) {
          display: block;
        }
      }
    }
    .carousel-images {
      width: 100vw;
      height: 100vh;
      position: relative;
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 99999;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px;
      background-color: #323232;

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

    .selected{
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
      display: flex;
      justify-content: center;
      align-items: center;

      .image-selected{
        width: 70%;
        border-radius: 6px;        

        @media screen and (max-width: 650px) {
          width: calc(100% - 20px);          
        }
      }
    }

    .images-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

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

          @media screen and (max-width: 650px) {
            column-gap: 10px;
            margin-bottom: 50px;
          }

            li{
              width: 25%;
              list-style: none;

              img{
                border-radius: 3px;
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