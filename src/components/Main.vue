<template>
  <div class="container">
    <div class="jumbotron">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img class="logo" src="../assets/img/jumbo.jpg" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img class="logo" src="../assets/img/jumbo2.jpg" alt="logo">
        </swiper-slide>
      </swiper>
      <div class="jumbotron-text">
        <h1>Buy and Sell your car at its value</h1>
        <h4>Find the right place and dealer</h4>
        <div class="learn-more">
          Learn more
          <span class="learn-more-arrow">&rarr;</span>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="card-container">
      <Card
        v-for="card in cards"
        :key="card.thumb"
        :thumb="card.thumb"
        :price="card.price"
        :series="card.series"
        :type="card.type"
      />
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { cardsData } from "../data/menus";
import Card from './Card.vue';

export default {
  name: "Main",
  components: {
    Card,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: cardsData,
      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 8000,
        },
      }
    };
  }
};
</script>


<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.jumbotron {
  background-size: cover;
  color: white;
  background-position: top;
  background-repeat: no-repeat;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-container {
  background-color: black;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 50px;
  padding-right: 200px;
  padding-left: 200px;
  position: relative;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  width: 50px;
  height: 50px;
}

.jumbotron-text {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
}

.jumbotron-text h1 {
  margin-bottom: 10px;
}

.jumbotron-text h4 {
  margin-bottom: 20px;
}

.learn-more {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.learn-more-arrow {
  margin-left: 10px;
  font-size: 16px;
}

.logo {
  width: 100%;
  height: auto;
  overflow: hidden;
}

img.logo {
  height: 650px;
  object-fit: cover;
  width: 100%;
}
</style>

