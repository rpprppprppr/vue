<script setup>
  import MainBanner from "@/components/MainBanner.vue";
  import Feature from "@/components/Feature.vue";
  import DefaultLayout from "@/layouts/Default.vue";
  import WOMEN from "@/assets/img/offer-1.png";
  import MEN from "@/assets/img/offer-2.png";
  import KIDS from "@/assets/img/offer-3.png";
  import ACCESSORIES from "@/assets/img/offer-4.png";
</script>

<template>
  <DefaultLayout>
    <MainBanner />
    <div class="offer">
      <div class="offer__block">
        <img class="block__photo" :src="WOMEN" alt="Для женщин">
        <div class="block__text">30% OFF <br> <span>FOR WOMEN</span></div>
      </div> 
      <div class="offer__block">
        <img class="block__photo" :src="MEN" alt="Для мужчин">
        <div class="block__text">HOT DEAL <br> <span>FOR MEN</span></div>
      </div> 
      <div class="offer__block">
        <img class="block__photo" :src="KIDS" alt="Для детей">
        <div class="block__text">NEW ARRIVALS <br> <span>FOR KIDS</span></div>
      </div> 
      <div class="offer__block">
        <img class="block__photo" :src="ACCESSORIES" alt="Акксесуары">
        <div class="block__text">LUXURIOUS & TRENDY <br> <span>ACCESSORIES</span></div>
      </div> 
    </div>
    <Feature />
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .offer {
    padding: 65px 230px 95px;
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .offer__block {
    position: relative;
    display: flex;
    cursor: pointer;
  }

  .offer__block:nth-child(4) {
    grid-column: 1 / -1;
    width: 100%;
  }

  .block__photo {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .block__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    white-space: nowrap; 
  }

  .block__text span {
    color: #F16D7F;
    font-weight: bold;
    font-size: 24px;
  }

  @media screen and (max-width: 1599px) {
    .offer {
      padding: 20px 16px 150px;
      grid-template-columns: repeat(3, 232px);
      gap: 20px;
    }

    .offer__block:nth-child(4) {
      grid-column: 1 / -1;
    }
  }

  @media screen and (max-width: 767px) {
    .offer {
      padding: 64px 16px;
      grid-template-columns: 344px;
      gap: 32px;
    }

    .offer__block:nth-child(4) {
      height: 110px;
    }
  }
</style>