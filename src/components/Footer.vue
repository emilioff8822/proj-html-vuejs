<template>
  <div class="container">
    <footer class="footer">
      <div class="footer-column">
        <h3>Autocar</h3>
        <ul>
          <li v-for="item in list1" :key="item.text" @mouseover="onMouseOver(item.text)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item.text }">{{ item.text }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Join our Newsletter</h3>
        <ul>
          <li v-for="item in list2" :key="item.text" @mouseover="onMouseOver(item.text)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item.text }">{{ item.text }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>My account</h3>
        <ul>
          <li v-for="item in list3" :key="item.text" @mouseover="onMouseOver(item.text)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item.text }">{{ item.text }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li v-for="item in list4" :key="item.text" @mouseover="onMouseOver(item.text)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item.text }">{{ item.text }}</li>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 200px;
  padding-right: 100px;
}

.footer-column {
  width: 25%;
  padding: 20px;
  color: white;
}

.footer-column h3 {
  margin-bottom: 25px;
  font-size: 1.4rem;
}

.footer-column ul {
  padding: 0;
}

.footer-column li {
  cursor: pointer;
  margin-bottom: 10px;
}

.footer-column li.active {
  color: yellow;
}

.footer-bottom {
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 0;
  padding: 20px 0;
}
</style>
