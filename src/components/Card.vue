<template>
  <div class="card">
    <div class="card-img-container">
      <img :src="img" :alt="name">
    </div>
    <h3>{{ name }}</h3>
    <p>{{ listings }} Listings</p>
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
      required: true
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
