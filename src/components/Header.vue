<!-- Header.vue -->


<script>
import { mainMenu } from "../data/menus";

export default {
  name: "Header",
  data() {
    return {
      mainMenu,
    };
  },
};
</script>
<template>
  <header class="container">
    <div class="logo">
      <img src="../assets/img/logo-autocar11.png" alt="logo" />
    </div>
    <nav>
      <ul>
        <li v-for="(link, index) in mainMenu" :key="index">
          <a :href="link.href" :class="{ active: link.isActive, 'custom-button': index >= mainMenu.length - 3 }">
            <span class="button-content">
              <img v-if="index === mainMenu.length - 3" src="../assets/img/padlock.png" alt="My Account" class="icon" />
              <img v-else-if="index === mainMenu.length - 2" src="../assets/img/add.png" alt="Add Car" class="icon" />
              <img v-else-if="index === mainMenu.length - 1" src="../assets/img/headphones.png" alt="Phone Number" class="icon" />
              {{ link.text }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/general/variables" as *;
@use "../scss/general/mixin" as *;

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-bottom: 0;
    width: 20%;
    display: flex;
    align-items: center;
    img {
      width: 50%;
      height: auto;
    }
  }

  nav {
    flex: 1;
    ul {
      display: flex;
      justify-content: flex-end;

      li {
        margin-left: 1rem;
      }

      a {
        display: inline-block;
        padding: 1rem;
        text-transform: capitalize;
        font-weight: 600;
        color: $link-color;

        &:hover,
        &.active {
          background-color: lighten($primary-color, $amount: 50%);
        }

        &.custom-button {
          background-color: #000;
          color: #fff;
          border-radius: 5px;
          display: flex;
          align-items: center;

          .button-content {
            display: flex;
            align-items: center;
          }

          .icon {
            width: 16px;
            margin-right: 0.5rem;
            filter: brightness(0) invert(1);
          }
        }
      }
    }
  }
}
</style>
