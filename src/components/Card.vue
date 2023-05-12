<template>
  <div class="card" :class="additionalClass">
    <div class="inline-elements">
      <p class="card-text">{{ text }}</p>
      <p class="card-tel">{{ tel }}</p>
    </div>
    <p class="card-autocar">{{ autocar }}</p>
    <p class="card-domanda">{{ domanda }}</p>

    <div class="card-img-container">
      <img :src="img" :alt="name">
    </div>
    <p class="card-name">{{ name }}</p>
    <p><font-awesome-icon :icon="checkIcon" /> {{ type }}</p>
    <p class="icon-text"><font-awesome-icon :icon="priceIcon" /> {{ price }}</p>
    <p class="icon-text"><font-awesome-icon :icon="brandIcon" /> {{ brand }}</p>
    <p class="icon-text"><font-awesome-icon :icon="fuelIcon" /> {{ fuel }}</p>
    <p v-if="listings">Listings: {{ listings }}</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Card",
  components: {
    FontAwesomeIcon
  },
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    checkIcon: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    priceIcon: {
      type: String,
      default: null
    },
    price: {
      type: Number,
      default: null
    },
    brandIcon: {
      type: String,
      default: null
    },
    brand: {
      type: String,
      default: null
    },
    fuelIcon: {
      type: String,
      default: null
    },
    fuel: {
      type: String,
      default: null
    },
    listings: {
      type: Number,
      default: null
    },
    additionalClass: {
      type: String,
      default: ""
    },
    tel: {
      type: String,
      default: null
    },
    autocar: {
      type: String,
      default: null
    },
    domanda: {
      type: String,
      default: null
    },
    button: {
      type: String,
      default: 'More'
    },
  }
};
</script>





<style scoped>
.card {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: black;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  padding: 16px;
  text-align: center;
  width: 172px;
  height: 300px;
  transition: transform 0.3s ease;

 
}

.card.auto2-card {
  width: calc((100% / 4) - 1rem);   
  display: flex;
  flex-wrap: wrap;
}

.card-img-container {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-img-container img {
  max-width: 100%;
  max-height: 100%;
}

h3 {
  margin: 0;
  margin-bottom: 8px;
}

p {
  margin: 0;
}

.card-img-container {
  padding-bottom: 10px; 
}

.card-name {
  margin: 0;
padding-top: 10px;  
padding-bottom: 10px; 
font-size: 18px;
}

.card-text {
  margin: 0;
  padding-bottom: 20px; 
}

.more-button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.icon-text {
  display: flex;
  align-items: center;
}

.icon-text .fa-icon {
  margin-right: 5px;
}

.inline-elements {
  display: flex;
  flex-direction: row;
}


.card:hover {
  transform: scale(1.2);
}




</style>
