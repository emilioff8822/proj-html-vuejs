<script>
import { mainMenu, footerMenu, footerImages, list1, list2 ,list3,list4, socialIcons } from '../data/menus';
export default {
  name: "Footer",
  data() {
    return {
      mainMenu,
      footerMenu,
      footerImages,
      list1,
      list2,
      list3,
      list4,
      socialIcons,
      hoveredItem: null,
      hoveredIcon: null



    };
  },
  methods: {
    onMouseOver(item) {
      this.hoveredItem = item;
    },
    onMouseOut() {
      this.hoveredItem = null;
    },
    onIconMouseOver(event) {
      this.hoveredIcon = event.target.alt;
    },
    onIconMouseOut() {
      this.hoveredIcon = null;
    },
    getImagePath(imagePath) {
      return require('@/assets/' + imagePath);
    },
    getImage(img) {
    return new URL(img, import.meta.url).href;
  }
  }
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row row1">
        <div class="footer-item" v-for="(item, index) in footerImages" :key="index">
          <img class="footer-image" :src="getImage(item.src)" :alt="item.alt">
          <span class="footer-text">{{ item.text }}</span>
        </div>
      </div>
      
      <div class="row row2">
        <div class="column column1">
          <h4>DC COMICS 1</h4>
          <ul class="footer-menu">
            <li v-for="(item, key) in list1" :key="key" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ active: hoveredItem === item }">{{ item.text }}</li>
          </ul>
          <h4>SHOP</h4>
          <ul class="footer-menu">
            <li v-for="(item, key) in list4" :key="key" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ active: hoveredItem === item }">{{ item.text }}</li>
          </ul>
        </div>
        <div class="column column2">
          <h4>DC</h4>
          <ul class="footer-menu">
            <li v-for="(item, key) in list2" :key="key" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ active: hoveredItem === item }">{{ item.text }}</li>
          </ul>
        </div>
        <div class="column column3">
          <h4>SITES</h4>
          <ul class="footer-menu">
            <li v-for="(item, key) in list3" :key="key" @mouseover="onMouseOver(item)" @mouseout="onMouseOut" :class="{ active: hoveredItem === item }">{{ item.text }}</li>
          </ul>
        </div>

        <div class="column column4">
          <img class="logo" src="../assets/img/dc-logo-bg.png" alt="logo">
        </div>
      </div>
     
      <div class="row row3">
        <button class="sign-up-btn">SIGN-UP NOW</button>
        <div class="follow-us">
          <span>FOLLOW US</span>
          <img
            v-for="(icon, index) in socialIcons"
            :key="index"
            :src="getImage(icon.src)"
            :alt="icon.alt"
            @mouseover="onIconMouseOver($event, icon.alt)"
            @mouseout="onIconMouseOut($event)"
            :class="{ 'icon-hover': hoveredIcon === icon.alt }"
          >
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
@use '../scss/general/variables' as *;

footer {
  h4 {
    color: white;
    font-size: larger;
  }

  li {
    cursor: pointer;
  }
  .icon-hover {
    transform: scale(1.5);
    transition: transform 0.3s;
  }

  .footer-menu {
    li {
      color: lightgray;
    }

    li.active {
      color: yellow;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .row {
    display: flex;

    &.row1 {
      background-color:black;
      height: 25%;
      align-items: center;
      justify-content: center;
      padding-right: 200px;
      padding-left: 200px;
      color: white;
    }

    &.row2 {
      background-image: url('../assets/img/footer-bg.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      height: 50%;
      justify-content: space-between;
      align-items: center;
      color: lightgray;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 150px;
      padding-left: 150px;

      .column {
        margin-left: 1rem; // Aggiungi un margine sinistro
        margin-right: 2rem; // Aggiungi un margine destro
      }
    }

    &.row3 {
      background-color: rgb(44, 43, 43);
      height: 25%;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 150px;
      padding-left: 150px;
    }
  }

  .column {
    flex-grow: 1;

    &.column1,
    &.column2,
    &.column3 {
      flex-basis: 10%;
    }

    &.column4 {
      flex-basis: 70%;
    }
  }

  .column4 {
    display: flex;
    justify-content: flex-end;
  }

  .logo {
    width: 50%;
  }

  .footer-item {
    display: flex;
    align-items: center;
  }

  .footer-image {
    width: 15%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 10px;
  }

  .footer-text {
    display: inline-block;
    vertical-align: middle;
  }

  .sign-up-btn {
    background-color: rgb(44, 43, 43);
    border: 2px solid rgb(17, 117, 232);
    color: white;
    font-weight: bold;
    padding: 1rem 1rem;
    cursor: pointer;
  }

  .follow-us {
    display: flex;
    align-items: center;

    span {
      color: rgb(17, 117, 232);
      margin-right: 1rem;
    }

    img {
      width: 30px;
      height: 30px;
      margin-left: 0.5rem;
    }
  }
}
</style>
