<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

  import Feature from "@/components/Feature.vue";
  import SecondaryLayout from "@/layouts/Secondary.vue";
  import ProductCard from "@/components/other/ProductCard.vue";
  import Paginator from "@/components/other/Paginator.vue";
  import FilterPanel from "@/components/other/FilterPanel.vue";

  const currentPage = ref(1)
  const windowWidth = ref(window.innerWidth)
  const updateWidth = () => { windowWidth.value = window.innerWidth }

  onMounted(() => { window.addEventListener('resize', updateWidth) })
  onBeforeUnmount(() => { window.removeEventListener('resize', updateWidth) })

  const images = import.meta.glob('@/assets/img/catalog-*.png', { eager: true });

  const productInfo = {
    name: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
  };

  const allProducts = Array.from({ length: 9 }, (_, i) => {
    const imgPath = `/src/assets/img/catalog-${i + 1}.png`;
    return {
      ...productInfo,
      image: images[imgPath].default,
    };
  })

  const cardsPerPage = computed(() => {
    if (windowWidth.value >= 768 && windowWidth.value < 1600) return 8
    return 9
  })

  const visibleProducts = computed(() => allProducts.slice(0, cardsPerPage.value))
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

      <Paginator v-model="currentPage" :totalPages="20" />
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