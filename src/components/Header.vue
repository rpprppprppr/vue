<script setup>
import { ref } from "vue";
import Menu from "@/components/Menu.vue";
import { ROUTES } from "@/config/routes.js";
import logo from "@/assets/icons/logo.svg";
import searchIcon from "@/assets/icons/search.svg";
import menuIcon from "@/assets/icons/menu.svg";
import userIcon from "@/assets/icons/user.svg";
import cartIcon from "@/assets/icons/cart.svg";

const menuRef = ref(null);

const openMenu = () => {
  if (menuRef.value) {
    menuRef.value.openMenu();
  }
};
</script>

<template>
  <header class="header">
    <div class="left">
      <RouterLink :to="{ name: ROUTES.HOME }" class="logo">
        <img :src="logo" alt="Главная страница" class="logo-img" />
      </RouterLink>
      <button class="search-button">
        <img :src="searchIcon" alt="Поиск" class="search-img" />
      </button>
    </div>
    <div class="right">
      <button class="menu-button" @click="openMenu">
        <img :src="menuIcon" alt="Меню" class="menu-img" />
      </button>
      <button class="user-button">
        <img :src="userIcon" alt="Личный кабинет" class="user-img" />
      </button>
      <button class="cart-button">
        <img :src="cartIcon" alt="Корзина" class="cart-img" />
      </button>
      <Menu ref="menuRef" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1600px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 0 230px;
  z-index: 1000;
  box-sizing: border-box;
}
.header button {
  background-color: transparent;
  outline: none;
}

.header button:hover {
  border-color: transparent;
}
.left, .right {
  display: flex;
  align-items: center;
}
.logo-img {
  width: 44px;
  height: 38px;
  margin-right: 40px;
}
.search-img {
  width: 26px;
  height: 26.79px;
}
.menu-button {
  margin-right: 32px;
}
.menu-img {
  width: 32px;
  height: 23px;
}
.user-button {
  margin-right: 32px;
}
.user-img {
  width: 29px;
  height: 29px;
}
.cart-button {
  position: relative;
}
.cart-img {
  width: 41px;
  height: 37px;
}
</style>
