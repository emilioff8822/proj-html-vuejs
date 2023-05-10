<template>
  <div class="card" :class="additionalClass">
    <div class="card-img-container">
      <img :src="img" :alt="name">
      <div class="heart-icon">
        <font-awesome-icon icon="heart" />
      </div>
    </div>
    <h3 class="card-name">
      {{ name }}
      <span class="icon-text check-icon"><font-awesome-icon :icon="checkIcon" /></span>
    </h3>
    <p class="type">{{ type }}</p>
    <div class="icon-row">
      <p class="icon-text"><font-awesome-icon :icon="priceIcon" /> {{ price }}</p>
      <p class="icon-text"><font-awesome-icon :icon="brandIcon" /> {{ brand }}</p>
      <p class="icon-text"><font-awesome-icon :icon="fuelIcon" /> {{ fuel }}</p>
    </div>
    <p class="card-text">{{ text }}</p>
    <div class="inline-elements">
      <p class="card-tel">{{ tel }}</p>
      <p class="card-autocar">{{ autocar }}</p>
      <p class="card-domanda">{{ domanda }}</p>
    </div>
    <p v-if="listings">Listings: {{ listings }}</p>
  </div>
</template>




<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AutoCards2",
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
  width: 200px;
  height: 300px;
  display: flex;  /* Aggiunto */
  flex-direction: row; /* Aggiunto */
  flex-wrap: wrap; /* Aggiunto */
  transition: transform 0.3s ease ;

 
}

.card.auto2-card {
  width: 25%;
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
  display: inline-flex;
  align-items: start;
  margin-right: 10px;
}

.icon-text .fa-icon {
  margin-right: 5px;
}

.inline-elements {
  display: flex;
  flex-direction: row;
}
.icons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px; 
}

.icon-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.check-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  padding-left:  8px; 
  font-size: 15px; 
}

.check-icon .fa-icon {
  font-size: 12px;
  margin: 0 auto;
}

.card:hover {
  transform: scale(1.2);
}


.heart-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}

.heart-icon:hover {
  color: red;
}
</style>

