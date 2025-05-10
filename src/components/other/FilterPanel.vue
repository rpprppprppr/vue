<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import filterIcon from "@/assets/icons/burger.svg"
  import arrowIcon from "@/assets/icons/arrow.svg"

  const activeMenu = ref(null)
  const showCategoriesSection = ref(true)
  const showBrandSection = ref(false)
  const showDesignerSection = ref(false)


  const categoriesItems = [
    "Accessories", "Bags", "Denim", "Hoodies & Sweatshirts", 
    "Jackets & Coats", "Polos", "Shirts", "Shoes", 
    "Sweaters & Knits", "T-Shirts", "Tanks"
  ]

  const filterPanelRef = ref(null)

  const toggleMenu = (menuName) => {
    activeMenu.value = activeMenu.value === menuName ? null : menuName
  }

  const handleClickOutside = (event) => {
    if (!filterPanelRef.value?.contains(event.target)) {
        activeMenu.value = null
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <div class="filter__panel" ref="filterPanelRef">
    <div class="filter">
      <div class="filter__left">
        <div class="filter__name" @click="toggleMenu('category')">
          <span class="filter__label">FILTER</span>
          <img class="filter__icon" :src="filterIcon" /></div>
        <div v-if="activeMenu === 'category'" class="filter__menu">
          <div class="filter__section">
            <div class="filter__title" @click="showCategoriesSection = !showCategoriesSection">CATEGORY</div>
            <div v-show="showCategoriesSection" class="items__list">
              <div v-for="item in categoriesItems" :key="item">{{ item }}</div>
            </div>
          </div>

          <div class="filter__section">
            <div class="filter__title" @click="showBrandSection = !showBrandSection">BRAND</div>
            <div v-show="showBrandSection" class="items__list">
              <div>Brand 1</div>
              <div>Brand 2</div>
            </div>
          </div>

          <div class="filter__section">
            <div class="filter__title" @click="showDesignerSection = !showDesignerSection">DESIGNER</div>
            <div v-show="showDesignerSection" class="items__list">
              <div>Designer 1</div>
              <div>Designer 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="filter__right">
      <div class="filter">    
        <div class="filter__name" @click="toggleMenu('trending')">TRENDING NOW <img :src="arrowIcon" /></div>
          <div v-if="activeMenu === 'trending'" class="filter__menu filter__menu--simple">
            <div class="items__list">
              <label><input type="checkbox" class="items__checkbox" /> Trending Item 1</label>
              <label><input type="checkbox" class="items__checkbox" /> Trending Item 2</label>
          </div>
        </div>
      </div>

      <div class="filter"> 
        <div class="filter__name" @click="toggleMenu('size')">SIZE <img :src="arrowIcon" /></div>
          <div v-if="activeMenu === 'size'" class="filter__menu filter__menu--simple">
            <div class="items__list">
              <label><input type="checkbox" class="items__checkbox" /> XS</label>
              <label><input type="checkbox" class="items__checkbox" /> S</label>
              <label><input type="checkbox" class="items__checkbox" /> M</label>
              <label><input type="checkbox" class="items__checkbox" /> L</label>
          </div>
        </div>
      </div>

      <div class="filter">
        <div class="filter__name" @click="toggleMenu('price')">PRICE <img :src="arrowIcon" /></div>
          <div v-if="activeMenu === 'price'" class="filter__menu filter__menu--simple">
            <div class="items__list">
              <label><input type="checkbox" class="items__checkbox" /> $0 - $50</label>
              <label><input type="checkbox" class="items__checkbox" /> $51 - $100</label>
              <label><input type="checkbox" class="items__checkbox" /> $101 - $200</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  

<style scoped lang="scss">
  .filter__panel {
    display: flex;
    width: 100%;
    text-align: left;
  }

  .filter__left {
    margin-right: 300px;
  }

  .filter__right {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .filter {
    position: relative;
  }

  .filter__name {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }

  .filter__menu {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 320px;
    padding: 16px;
    position: absolute;
    background: white;
    z-index: 10;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.2);
  }

  .filter__menu--simple {
    width: max-content;
    padding: 8px 10px;
    gap: 5px;
  }

  .filter__menu--simple .items__list {
    padding: 0;
  }

  .items__checkbox {
    accent-color: #EBEBEB;
  }

  .filter__menu .filter__name {
    color: #F16D7F;
    font-weight: 600;
  }

  .filter__title {
    padding: 10px 16px;
    border-left: 5px solid #F16D7F;
    border-bottom: 1px solid #EBEBEB;
  }

  .filter__title:hover {
    background-color: #EBEBEB;
  }

  .items__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px 16px;
  }

  @media screen and (max-width: 1599px) {
    .filter__panel {
      justify-content: space-between;
    }
    .filter__left {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .filter__right {
      gap: 24px;
    }

    .filter__label {
      display: none;
    }

    .filter__icon {
      width: 38px;
      height: 25px;
    }
  }
</style>