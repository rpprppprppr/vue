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
      <RouterLink :to="{ name: ROUTES.HOME }">
        <img :src="logo" alt="Главная страница" />
      </RouterLink>
      <RouterLink class="header__icon">
        <img :src="searchIcon" alt="Поиск" />
      </RouterLink>
    </div>
    <div class="right">
      <div class="header__icon" @click="openMenu">
        <img :src="menuIcon" alt="Меню" style="margin-top: 5px;"/>
      </div>
      <RouterLink :to="{ name: ROUTES.REGISTRATION }" class="header__icon adaptive">
        <img :src="userIcon" alt="Личный кабинет" />
      </RouterLink>
      <RouterLink :to="{ name: ROUTES.CART }" class="header__icon adaptive">
        <img :src="cartIcon" alt="Корзина" />
      </RouterLink>
      <Menu ref="menuRef" />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 18px 230px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #222224;
    z-index: 1000;
  }

  .header__icon {
    height: 30px;
    width: fit-content;
  }

  .left, .right {
    display: flex;
    gap: 35px;
    align-items: center;
  }

  @media screen and (max-width: 1599px) {
    .header {
      padding: 18px 32px;
    }
  }

  @media screen and (max-width: 767px) {
    .header {
      padding: 18px 16px;
    }

    .adaptive {
      display: none;
    }
  }
</style>