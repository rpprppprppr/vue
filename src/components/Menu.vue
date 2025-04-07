<script setup>
  import { ref } from "vue";
  import closeIcon from "@/assets/icons/close.svg";

  const isOpen = ref(false);
  const manItems = ["Accessories", "Bags", "Denim", "T-Shirts"];
  const womanItems = ["Accessories", "Jackets & Coats", "Polos", "T-Shirts", "Shirts"];
  const kidsItems = ["Accessories", "Jackets & Coats", "Polos", "T-Shirts", "Shirts", "Bags"];

  const closeMenu = () => {
    isOpen.value = false;
  };

  const openMenu = () => {
    isOpen.value = true;
  };

  defineExpose({ openMenu, closeMenu });
</script>

<template>
  <div v-if="isOpen" class="menu__overlay" @click.self="closeMenu">
    <div class="menu__container">
      <div class="menu">
        <button class="close-button" @click="closeMenu"><img :src="closeIcon" alt="Закрыть" /></button>
        <div class="menu-title">MENU</div>
        <div class="menu__nav">
          <div class="category__section">
            <span class="category">MAN</span>
            <div class="items-list">
              <div v-for="item in manItems" :key="item">{{ item }}</div>
            </div>
          </div>
          <div class="category__section">
            <span class="category">WOMAN</span>
            <div class="items-list">
              <div v-for="item in womanItems" :key="item">{{ item }}</div>
            </div>
          </div>
          <div class="category__section">
            <span class="category">KIDS</span>
            <div class="items-list">
              <div v-for="item in kidsItems" :key="item">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .menu__overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    
    z-index: 1000;
  }

  .menu__container {
    min-height: 100vh;
    min-width: 375px;
    max-width: 1600px;
    width: 100%;
    margin: 80px auto 0;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    background: white;
    width: 232px; 
    height: 730px; 
    padding: 16px;
    padding-left: 34px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    font-size: 14px;
  }

  .close-button {
    background: none;
    border: none;
    padding: 0;
    width: 12px;
    align-self: end;
  }

  .menu-title {
    font-weight:bold; 
    margin-bottom: 14px;
  }

  .menu__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .category__section, .items-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .items-list {
    margin-left: 20px;
    cursor: pointer;
  }

  .category {
    color: #F16D7F;
  }

  @media screen and (max-width: 767px) {
    .menu__container {
      margin-top: 80px;
      display: block;
    }

    .menu {
      width: 100%;
      height: fit-content;
      padding-left: 0;
      padding: 25px;
      text-align: center;
      box-sizing: border-box;
      font-size: 15px;
    }

    .items-list {
      margin-left: 0;
    }
  }
</style>