<script setup>
  import { ref, onMounted } from "vue";
  import { ROUTES } from "@/config/constants/routes.js";
  import { useApi } from "@/api/index.js";
  import MainBanner from "@/components/MainBanner.vue";
  import Feature from "@/components/Feature.vue";
  import ProductCard from "@/components/other/ProductCard.vue";
  import OfferBlock from "@/components/other/OfferBlock.vue";
  import DefaultLayout from "@/layouts/Default.vue";

  const catalog = ref([]);
  const offers = ref([]);
  
  onMounted(async () => {
    const { get } = useApi();

    const offerResponse = await get("fixtures/offer.json");
    offers.value = offerResponse.data.map(item => ({
      description: item.description,
      category: item.category,
      image: `img/offer/${item.id}.png`
    }));

    const catalogResponse = await get("fixtures/catalog.json");
    catalog.value = catalogResponse.data.map(item => ({
      title: item.title,
      description: item.description,
      price: item.price,
      image: `img/product/${item.id}.png`
    }));
  });
</script>

<template>
  <DefaultLayout>
    <MainBanner />
    <div class="offer">
      <OfferBlock v-for="(offer, index) in offers" :key="index" v-bind="offer"/>
    </div>

    <div class="products">
      <div class="block__title">Fetured Items</div>
      <div class="block__subtitle">Shop for items based on what we featured in this week</div>
      <div class="products__block">
        <ProductCard v-for="(product, index) in catalog" :key="index" v-bind="product" />
      </div>
      <RouterLink :to="{ name: ROUTES.CATALOG }">
        <button class="block__button">Browse All Product</button>
      </RouterLink>
    </div>
    <Feature />
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .offer {
    padding: 65px 230px 0;
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .products {
    padding: 95px 230px;
  }

  .block__title {
    font-size: 30px;
    margin-bottom: 6px;
  }

  .block__subtitle {
    font-size: 14px;
    color: #9F9F9F;
  }

  .products__block {
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    padding: 48px 0;
    justify-content: center;
    align-items: center;
  }

  .block__button {
    color: #F26376;
    padding: 15px 38px;
    border-color: #F26376;
    background-color: white;
    border-radius: 0;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  .block__button:hover {
    color: white;
    background-color: #F26376;
  }

  @media screen and (max-width: 1599px) {
    .offer {
      padding: 20px 16px;
      grid-template-columns: repeat(3, 232px);
      gap: 20px;
    }

    .products {
      padding: 135px 18px 64px;
    }

    .products__block {
      grid-template-columns: repeat(2, 360px);
      gap: 16px;
      padding: 72px 0 32px;
    }
  }

  @media screen and (max-width: 767px) {
    .offer {
      padding: 64px 16px;
      grid-template-columns: 344px;
      gap: 32px;
    }

    .products {
      padding: 48px 8px 96px;
    }

    .products__block {
      grid-template-columns: repeat(1, 360px);
      padding: 65px 0 40px;
    }
  }
</style>