<template>
  <div class="container">
    <footer class="footer">
      <div class="footer-column">
        <h4>Colonna 1</h4>
        <ul>
          <li v-for="item in list1" :key="item" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item }">{{ item }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Colonna 2</h4>
        <ul>
          <li v-for="item in list2" :key="item" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item }">{{ item }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Colonna 3</h4>
        <ul>
          <li v-for="item in list3" :key="item" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item }">{{ item }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Colonna 4</h4>
        <ul>
          <li v-for="item in list4" :key="item" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item }">{{ item }}</li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>2022 All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mainMenu, footerMenu, footerImages, list1, list2 ,list3,list4, socialIcons } from '../data/menus';
export default {
  name: "Footer",
  data() {
    return {
      list1,
      list2,
      list3,
      list4,
      hoveredItem: null,
    };
  },
  methods: {
    onMouseOver(item) {
      this.hoveredItem = item;
    },
    onMouseOut() {
      this.hoveredItem = null;
    },
  }
};
</script>


<style lang="scss">
@use '../scss/general/variables' as *;

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }



.footer {
  background-color: black;
  color: white;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.footer-column {
  width: 25%;
  padding: 20px;
}

.footer-bottom {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
</style>
