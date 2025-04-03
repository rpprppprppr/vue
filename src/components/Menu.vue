<script setup>
  import { ref } from "vue";

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
  <div v-if="isOpen" class="menu-overlay" @click.self="closeMenu">
    <div class="menu-container">
      <button class="close-button" @click="closeMenu">&times;</button>
      <h2 class="menu-title">MENU</h2>
      <nav>
        <ul>
          <li class="category-section">
            <span class="category">MAN</span>
            <ul class="items-list">
              <li v-for="item in manItems" :key="item">{{ item }}</li>
            </ul>
          </li>
          <li class="category-section">
            <span class="category">WOMAN</span>
            <ul class="items-list">
              <li v-for="item in womanItems" :key="item">{{ item }}</li>
            </ul>
          </li>
          <li class="category-section">
            <span class="category">KIDS</span>
            <ul class="items-list">
              <li v-for="item in kidsItems" :key="item">{{ item }}</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    z-index: 1000;
  }
  .menu-container {
    background: white;
    width: 232px; 
    height: 764px; 
    padding: 20px;
    margin-top: 75px; 
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .menu-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
    text-align: left;
  }
  .category {
    display: block;
    font-weight: bold;
    color: #F16D7F;
    margin-top: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .category-section {
    margin-bottom: 15px;
  }
  .items-list {
    list-style: none;
    padding: 0;
    margin-left: 15px;
  }
  .items-list li {
    margin: 5px 0;
    font-size: 16px;
    color: #333;
  }
</style>