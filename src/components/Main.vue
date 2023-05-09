<template>
  <div class="container">
    <div class="jumbotron">
      <img class="logo" :src="images[counter]" alt="logo">
      <div class="jumbotron-text">
        <h1>Buy and Sell your car at its value</h1>
        <h4>Find the right place and dealer</h4>
        <div class="learn-more">
          Learn more
          <span class="learn-more-arrow">&rarr;</span>
        </div>
      </div>
      <div @click="next" class="swiper-button-next">&#10095;</div>
      <div @click="prev" class="swiper-button-prev">&#10094;</div>
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
import { cardsData } from "../data/menus";
import Card from './Card.vue';

export default {
  name: "Main",
  components: {
    Card
  },
  data() {
    return {
      cards: cardsData,
      counter: 0,
      images: [
        "src/assets/img/jumbo.jpg",
        "src/assets/img/jumbo2.jpg"
      ]
    };
  },
  methods: {
    next() {
      this.counter++;
      if (this.counter === this.images.length) this.counter = 0;
    },
    prev() {
      this.counter--;
      if (this.counter < 0) this.counter = this.images.length - 1;
    }
  },
  mounted() {
    setInterval(() => {
      this.next();
    }, 8000);
  }
};
</script>

<!-- Stili rimangono gli stessi -->


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
  width: 100%;
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
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
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