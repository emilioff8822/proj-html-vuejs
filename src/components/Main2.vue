<template>
  <div class="container">
    <div class="jumbotron jumbo3">
      <font-awesome-icon icon="thumbs-up" class="fa-3x"/>
      <h2>What are Our Coustomer Saying?</h2>
      <p>Opinions from our happy customers</p>
      
      <div class="stars">
        <font-awesome-icon icon="star" class="fa-2x" style="color: white; margin-right: 5px;" v-for="i in 3" :key="i"/>
      </div>
      <div class="card-container">
        <Card 
          v-for="(client, index) in clienti" 
          :key="index" 
          :img="client.img" 
          :name="client.nome" 
          :text="client.text"
        />
      </div>
    </div>

    <div class="jumbotron jumbo4">
      <font-awesome-icon icon="thumbs-up" color="black" class="fa-3x"/>
      <h2 style="color: black;">Recent Articles</h2>
      <p style="color: black;">Useful information about car</p>

      <div class="card-container">
        <auto4card 
        v-for="(auto, index) in auto4" 
        :key="index" 
        :img="auto.img" 
        :tel="auto.tel" 
        :domanda="auto.domanda"
        :text="auto.text"
        :button="auto.button"
      />
      </div>
    </div>

  </div>
</template>


<script>
import { secondMenu, auto1, auto2, clienti, auto4} from "../data/menus";
import Card from './Card.vue';
import auto4card from './autocard4.vue';  
import AutoCards2 from './AutoCards2.vue';  



export default {
  name: "Main2",
  components: {
    Card,auto4card,AutoCards2
  },
  data() {
    return {
      secondMenu,
      auto1,
      auto2,
      clienti,
      auto4,
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
.jumbo3 {
  background-image: url("../assets/img/jumbo3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 600px;
}

.jumbo3 .stars {
  display: flex;
  color: white;
  justify-content: center;
  margin-top: 10px;
}

.jumbo3 .card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  background: transparent; 
  grid-auto-rows: minmax(auto, 1fr); 

}
.jumbo3 h2,p {
  margin-top: 20px;
}

.card-container .card {

}
.jumbo4 {
  background-color: white;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}

.jumbo4 .card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  grid-auto-rows: minmax(auto, 1fr);
}
</style>