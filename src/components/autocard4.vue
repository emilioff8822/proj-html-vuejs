<template>
  <div class="card auto4-card" :class="additionalClass">
    <div class="card-img-container">
      <img :src="img" :alt="name">
    </div>
    <h3 class="card-name">{{ tel }}</h3>
    <p class="card-question">{{ domanda }}</p>
    <p class="card-text">{{ text }}</p>
    <button class="more-button">{{ button }}</button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "auto4card",
  components: {
    FontAwesomeIcon
  },
  props: {
    img: {
      type: String,
      required: true
    },
    tel: {
      type: String,
      required: true
    },
    domanda: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    button: {
      type: String,
      default: 'More'
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
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease ;

}

.auto4-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

}

.card-img-container {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-img-container img {
  width: 200px;
  margin-top: 10px;

}

.card-name {
  margin: 0;
  padding-top: 10px;  
  padding-bottom: 10px; 
  font-weight: 600;
}

.card-text {
  margin: 0;
  padding-bottom: 20px; 
}

.card-question {
  margin: 0;
  padding-bottom: 10px; 
  font-weight: bold;
}

.more-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: background-color 0.3s ease, transform 0.3s ease; 
  transform-origin: center; 
}

.more-button:hover {
  background-color: #333;
  background-color: #333;
  transform: scale(1.25);
}

.card:hover {
  transform: scale(1.2);
}

</style>
