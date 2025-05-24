<script setup>
  import { ref, watch, computed } from 'vue'
  import { useCatalogStore } from '@/store/catalog.js'
  import CustomSelect from '@/components/other/CustomSelect.vue'
  import filterIcon from '@/assets/svg/burger.svg'

  const catalogStore = useCatalogStore()

  const activeMenu = ref(null)
  const showCategoriesSection = ref(true)

  const toggleMenu = (menuName) => {
    activeMenu.value = activeMenu.value === menuName ? null : menuName
  }

  const categoriesItems = computed(() => catalogStore.categories)
  const selectedCategories = computed({
    get: () => catalogStore.filters.categories,
    set: (val) => catalogStore.setCategories(val),
  })

  const priceBounds = computed(() => catalogStore.priceBounds)
  const dynamicPriceOptions = computed(() => {
    const min = priceBounds.value.min
    const max = priceBounds.value.max
    if (min === max) return []
    const step = (max - min) / 3
    return [
      { label: 'All prices', value: null },
      { label: `$${min.toFixed(0)} - $${(min + step).toFixed(0)}`, value: { min, max: min + step } },
      { label: `$${(min + step).toFixed(0)} - $${(min + 2 * step).toFixed(0)}`, value: { min: min + step, max: min + 2 * step } },
      { label: `$${(min + 2 * step).toFixed(0)} - $${max.toFixed(0)}`, value: { min: min + 2 * step, max } },
    ]
  })

  const selectedPriceLabel = ref('All prices')

  watch(
    () => catalogStore.filters.priceRange,
    (newRange) => {
      if (!newRange) {
        selectedPriceLabel.value = 'All prices'
        return
      }
      const found = dynamicPriceOptions.value.find(opt =>
        opt.value && newRange.min === opt.value.min && newRange.max === opt.value.max
      )
      selectedPriceLabel.value = found ? found.label : ''
    },
    { immediate: true }
  )

  watch(selectedPriceLabel, (newLabel) => {
    const found = dynamicPriceOptions.value.find(opt => opt.label === newLabel)
    if (found) {
      catalogStore.setPriceRange(found.value)
    } else {
      catalogStore.setPriceRange(null)
    }
  })

  function toggleCategory(item) {
    if (selectedCategories.value.includes(item)) {
      selectedCategories.value = selectedCategories.value.filter(c => c !== item)
    } else {
      selectedCategories.value = [...selectedCategories.value, item]
    }
  }
</script>

<template>
  <div class="filter__panel">
    <div class="filter">
      <div class="filter__left">
        <div class="filter__name" @click="toggleMenu('category')">
          <span class="filter__label">FILTER</span>
          <img class="filter__icon" :src="filterIcon" /></div>
        <div v-if="activeMenu === 'category'" class="filter__menu">
          <div class="filter__section">
            <div class="filter__title" @click="showCategoriesSection = !showCategoriesSection">CATEGORY</div>
            <div v-show="showCategoriesSection" class="items__list">
              <div v-for="item in categoriesItems" :key="item" :class="{ selected: selectedCategories.includes(item) }" class="category-item" @click="toggleCategory(item)" >
                {{ item }}
              </div>
              <div class="category-item clear" @click="selectedCategories = []" :class="{ selected: selectedCategories.length === 0 }" > All categories </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CustomSelect title="PRICE" :options="dynamicPriceOptions.map(opt => opt.label)" v-model="selectedPriceLabel" :multiple="false" />
    <span v-if="selectedPriceLabel" style="margin-left: 10px;"> {{ selectedPriceLabel }}</span>
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
    text-transform: uppercase;
    gap: 10px;
    padding: 24px 16px;
  }

  .category-item {
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
  }

  .category-item:hover {
      background-color: #f5f5f5;
  }

  .category-item.selected {
    background-color: #F16D7F;
    color: white;
    font-weight: 600;
  }

  .category-item.clear {
    color: #999;
  }

  .category-item.clear.selected {
    background-color: #f0f0f0;
    color: #333;
    font-weight: normal;
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
    .filter__label {
      display: none;
    }

    .filter__icon {
      width: 38px;
      height: 25px;
    }
  }
</style>