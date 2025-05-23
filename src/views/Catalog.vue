<script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useWindowSize } from '@vueuse/core'

  import { useCatalogStore } from '@/store/catalog.js'
  import Feature from '@/components/Feature.vue'
  import SecondaryLayout from '@/layouts/Secondary.vue'
  import ProductCard from '@/components/other/ProductCard.vue'
  import Paginator from '@/components/other/Paginator.vue'
  import FilterPanel from '@/components/other/FilterPanel.vue'

  const currentPage = ref(1)
  const { width } = useWindowSize()

  const catalogStore = useCatalogStore()
  const { getCatalog } = storeToRefs(catalogStore)

  onMounted(async () => { 
    await catalogStore.readCatalog()
  })

  const cardsPerPage = computed(() => (width.value >= 768 && width.value < 1600 ? 8 : 9))
  const totalPages = computed(() =>
    Math.ceil(getCatalog.value.length / cardsPerPage.value)
  )

  const visibleProducts = computed(() => {
    const start = (currentPage.value - 1) * cardsPerPage.value
    return getCatalog.value.slice(start, start + cardsPerPage.value)
  })

  watch(currentPage, () => {
    const element = document.querySelector('.catalog')
    const offset = 80
    const top = element ? element.offsetTop - offset : 0
    window.scrollTo({ top, behavior: 'smooth' })
  })
</script>

<template>
  <SecondaryLayout>
    <div class="catalog">
      <div class="filters">
        <FilterPanel />
      </div>

      <div class="products">
        <ProductCard v-for="(product, index) in visibleProducts" :key="index" v-bind="product" />
      </div>

      <Paginator v-model="currentPage" :totalPages="totalPages" />
    </div>
    
    <Feature />
  </SecondaryLayout>
</template>

<style scoped lang="scss">
  .catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 230px 90px;
  }

  .filters {
    max-width: 1140px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
  }

  .products {
    padding: 64px 0 48px;
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1599px) {
    .catalog {
      padding: 24px 64px;
    }

    .filters {
      width: 768px;
      padding: 0;
    }

    .products {
      padding: 40px 0;
      grid-template-columns: repeat(2, 360px);
      gap: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    .filters {
      font-size: 12px;
      width: 360px;
    }

    .products {
      padding: 32px 8px 40px;
      grid-template-columns: repeat(1, 360px);
    }
  }
</style>