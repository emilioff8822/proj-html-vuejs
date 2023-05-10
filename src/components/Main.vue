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
      <div class="second-menu" v-for="(item, index) in secondMenu" :key="index">
        <input v-if="item.type === 'input'" v-model="item.value" :placeholder="item.placeholder" />
        <span v-else-if="item.type === 'text'">{{ item.text }}</span>
        <button v-else-if="item.type === 'button'" class="search-button">{{ item.text }}</button>
      </div>
      <div class="auto1-cards">
        <Card v-for="(item, index) in auto1" :key="index" :img="item.img" :name="item.name" :listings="item.listings" />
      </div>
      <div class="auto2-cards">
        <AutoCards2
        v-for="(item, index) in auto2"
        :key="index"
        :img="item.img"
        :name="item.name"
        :checkIcon="item.checkIcon"
        :type="item.type"
        :priceIcon="item.priceIcon"
        :price="item.price"
        :brandIcon="item.brandIcon"
        :brand="item.brand"
        :fuelIcon="item.fuelIcon"
        :fuel="item.fuel"
        :additionalClass="'auto2-card'"
      />
      </div>
      <div class="show-all-button-container">
        <button class="show-all-button">
          Show all cards <span class="show-all-arrow">&rarr;</span>
        </button>
      </div>
    </div>
   
    
       <div class="jumbotron jumbo2">
          <div class="left-column">
            <div class="circle-top-left">
              <div class="circle-content">
                <div class="circle-number">2 4</div>
                <div class="circle-text">Years of <br> Experience</div>
              </div>
            </div>
            
            <div class="circle-bottom-right">
              <div class="circle-content">
                <div class="circle-number">2 4 0</div>
                <div class="circle-text">Social Expert <br> Team</div>
              </div>
            </div>
            
            
          </div>
          <div class="right-column">
            <h1><strong>Want to buy or sell a vehicle?</strong></h1>
            <p class="right-column-text">You can put your vehicles for sale by registering on our website. Whether you are a dealer or sell personally. Sell ​​your vehicle in the most profitable way. With this system, which has millions of members, you will be able to buy and sell vehicles quickly.</p>
            <h3><strong>Model Vehicles</strong></h3>
            <p class="right-column-text">We are sure that you will find vehicles of suitable models on our website.</p>
            <h3><strong>2nd Hand Vehicles</strong></h3>
            <p class="right-column-text">You can put your used vehicles for sale by adding them to our website.</p>
            <button class="know-us-button">Get to know us <span class="show-all-arrow">&rarr;</span></button>
          </div>
        </div>



      </div>
    </template>
    
    

<script>
import { secondMenu, auto1, auto2, clienti } from "../data/menus";
import Card from './Card.vue';
import AutoCards2 from './AutoCards2.vue';  

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
  name: "Main",
  components: {
    Card,
    FontAwesomeIcon,
    AutoCards2
},
  data() {
    return {
      secondMenu,
      auto1,
      auto2,
      clienti,
      AutoCards2,
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

.card-container {
  background-color: white;
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

.second-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.second-menu input,
.second-menu span {
  border: 1px solid lightgray;
  padding: 10px 15px;
  background-color: white;
  color: black;
}

.second-menu button.search-button {
  background-color: black;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
}

.auto1-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 25px;
  justify-content: space-between;
}

.auto2-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.auto2-card {
  width: calc(25% - 20px);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auto2-card h3 {
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.auto2-card .fas.fa-check {
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 2px 4px;
  margin-left: 8px;
}

.auto2-card p {
  margin: 0;
}

.auto2-card p:nth-child(2) {
  margin-bottom: 8px;
}
.auto2-card p:nth-child(4),
.auto2-card p:nth-child(5),
.auto2-card p:nth-child(6) {
  display: inline;
  margin-right: 8px;
}

@media (max-width: 1200px) {
  .card-container {
    padding-right: 100px;
    padding-left: 100px;
  }
}

@media (max-width: 992px) {
  .card-container {
    padding-right: 50px;
    padding-left: 50px;
  }

  .auto2-card {
    width: calc(33.333% - 20px);
  }
}

@media (max-width: 768px) {
  .card-container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .auto2-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 576px) {
  .auto2-card {
    width: 100%;
    margin-bottom: 16px;
  }

  .auto2-inline {
    display: flex;
    gap: 8px;
  }
}

.show-all-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.show-all-button {
  background-color: black;
  color: white;
  padding: 15px 15px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.show-all-button:hover {
  background-color: #333;
}

.show-all-arrow {
  margin-left: 10px;
  font-size: 16px;
}
.jumbo2 {
  display: flex;
  height: 600px;
}

.left-column {
  /* Carica prima l'immagine di sfondo e poi l'immagine di primo piano */
  background-image: url("../assets/img/jumbo22.png"), url("../assets/img/circle.png");
  background-size: 80%, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  width: 50%;
  height: 100%;
}


.left-column img {
  width: 50%;
}

.right-column {
  background-color: white;
  color: black;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-column h1,
.right-column h3,
.right-column p,
.know-us-button {
  margin-bottom: 20px;
  text-align: left;
  
}

.right-column-text {
  text-align: justify;
  text-justify: inter-word;
}

.know-us-button {
  background-color: black;
  color: white;
  padding: 20px 20px;
  width: 200px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
}

.know-us-button:hover {
  background-color: #333;
  padding: 10px 15px;

}

.show-all-arrow {
  margin-left: 10px;
  font-size: 16px;
}

.circle-top-left, .circle-bottom-right {
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 180px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-top: 15px;
  font-size: 26px; 
  font-weight: bold; 
  padding-bottom: 20px;
}

.circle-top-left {
  top: 80px;
  left: 200px;
  text-align: center;
  
}

.circle-bottom-right {
  bottom: 50px;
  right: 800px;
  text-align: center;
}
.circle-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.circle-number {
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 10px;
}

.circle-text {
  font-size: 18px;
}
.circle-top-left, .circle-bottom-right {
  transition: transform 0.3s ease; /* Durata dell'animazione */
}

.circle-top-left:hover, .circle-bottom-right:hover {
  transform: scale(1.2);
}

</style>