<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const pageConfig = {
    catalog: {
      leftText: 'NEW ARRIVALS',
      rightText: 'HOME / MEN / <span style="font-weight: bold; color: #F16D7F;">NEW ARRIVALS</span>',
    },
    product: {
      leftText: 'NEW ARRIVALS',
      rightText: 'HOME / MEN / <span style="font-weight: bold; color: #F16D7F;">NEW ARRIVALS</span>',
    },
    cart: {
      leftText: 'SHOPPING CART',
      rightText: null,
    },
    registration: {
      leftText: 'REGISTRATION',
      rightText: null,
    },
  };

  const currentPage = route.name;
  const config = pageConfig[currentPage] || { leftText: '', rightText: null };
</script>

<template>
  <div class="banner">
    <div class="left">{{ config.leftText }}</div>
    <div class="right" v-if="config.rightText" v-html="config.rightText"></div>
  </div>
</template>

<style scoped lang="scss">
  .banner {
    background-color: #F8F3F4;
    padding: 0 230px;
    height: 148px;
    display: flex;
    justify-content: space-between;
  }

  .left, .right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left {
    color: #F16D7F;
    font-size: 24px;
  }

  .right {
    color: #636363;
    font-size: 14px;
    font-weight: 300;
  }

  @media screen and (max-width: 1599px) {
    .banner {
      padding: 0 16px;
    }
  }

  @media screen and (max-width: 767px) {
    .banner {
      padding: 24px 83px 46px;
      flex-direction: column;
      gap: 32px;
      justify-content: initial;
      height: fit-content;
    }
  }  
</style>