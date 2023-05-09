<template>
  <div class="card">
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
export default {
  name: "Card",
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    listings: {
      type: Number,
      required: false
    },
    checkIcon: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    priceIcon: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: false
    },
    brandIcon: {
      type: String,
      required: false
    },
    brand: {
      type: String,
      required: false
    },
    fuelIcon: {
      type: String,
      required: false
    },
    fuel: {
      type: String,
      required: false
    }
  }
}
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

.card-img-container {
  width: 100%;
  height: 100px;
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
}

p {
  margin: 0;
}
</style>
