<template>
  <div class="container">
    <footer class="footer">
     
      <div class="footer-column">
        <h3>
          <img src="../assets/img/logo-autocar11.png" alt="logo" />
          Autocar
        </h3>
        <ul>
          <li 
          v-for="(item, index) in list1" 
          :key="index" 
          @mouseover="onMouseOver(item.text)" 
          @mouseout="onMouseOut" 
          :class="{ 'active': hoveredItem === item.text }">
          <template v-if="item.text">
            <font-awesome-icon :icon="item.icon" />
            {{ item.text }}
          </template>
          <template v-else>
            <span v-for="icon in item.icons" :key="icon.platform">
              <font-awesome-icon :icon="icon.icon" />
            </span>
          </template>
        </li>
          
        </ul>
      </div>
     
     
      <div class="footer-column">
        <h3>Join our Newsletter</h3>
        <ul>
          <li v-for="item in list2" :key="item.text" @mouseover="onMouseOver(item.text)" @mouseout="onMouseOut" :class="{ 'active': hoveredItem === item.text }">{{ item.text }}</li>
        </ul>
        <input type="email" placeholder="Your email address" />
        <input type="submit" value="Subscribe" />
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
      
    
      
    </footer>
    <div class="footer-bottom">
      <p>2022 All Rights Reserved</p>
    </div>
   
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mainMenu, footerMenu, footerImages, list1, list2 ,list3,list4, socialIcons } from '../data/menus';

export default {
  name: "Footer",
  components: {
    FontAwesomeIcon
  },
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
  padding-right: 200px;
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
  padding: 10px;
  margin-right: 20px;
}

.footer-column li {
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: transform 0.3s ease, color 0.3s ease; /* Add transition here */

}.footer-column li:hover {
  transform: scale(1.2); 
  color:gold; 
}


.footer-bottom {
  width: 100%;
  text-align: center;
  color:black;
  padding: 20px 0;
  font-size: 14px;
}
.footer-column li div.social-icons {
  display: flex;
  justify-content: space-between;
  width: 100px; 
}
.footer-column input {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
}

.footer-column:not(:last-child) {
  margin-right: 40px;
}

footer span {
  margin: 5px;
}



.svg-inline--fa {
  margin-right: 10px; 

}

.footer-column li span:hover .svg-inline--fa {
  transform: scale(2);
  transition: transform 0.3s ease;
  color: gold;
}


</style>
