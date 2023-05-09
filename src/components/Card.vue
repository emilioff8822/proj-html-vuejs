<template>
  <div class="card">
    <div class="card-img-container">
      <img :src="thumb" :alt="series">
    </div>
    <p>{{ price }}</p>
    <p>{{ series }}</p>
    <p>{{ type }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    thumb: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    series: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>
.card {
  background-color: #000;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}

.card-header {
  background-color: #f7f7f7;
  padding: 16px;
}

.card-body {
  padding: 16px;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
