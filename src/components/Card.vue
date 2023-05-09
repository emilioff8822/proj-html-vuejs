<template>
  <div class="card" :class="additionalClass">
    <div class="card-img-container">
      <img :src="img" :alt="name">
    </div>
    <h3>{{ name }}</h3>
    <p><font-awesome-icon :icon="checkIcon" /> {{ type }}</p>
    <p><font-awesome-icon :icon="priceIcon" /> {{ price }}</p>
    <p><font-awesome-icon :icon="brandIcon" /> {{ brand }}</p>
    <p><font-awesome-icon :icon="fuelIcon" /> {{ fuel }}</p>
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
    }
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
}

.card.auto2-card {
  width: calc((100% / 4) - 1rem);   
  display: flex;
  flex-wrap: wrap;
}

.card-img-container {
  width: 100%;
  height: 200px;
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
</style>
