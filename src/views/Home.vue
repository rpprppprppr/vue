<script setup>
import MainBanner from "@/components/MainBanner.vue";
import Feature from "@/components/Feature.vue";
import DefaultLayout from "@/layouts/Default.vue";
import WOMEN from "@/assets/img/offer-1.png";
import MEN from "@/assets/img/offer-2.png";
import KIDS from "@/assets/img/offer-3.png";
import ACCESSORIES from "@/assets/img/offer-4.png";

const offers = [
  {
    image: WOMEN,
    alt: "Для женщин",
    line1: "30% OFF",
    line2: "FOR WOMEN",
  },
  {
    image: MEN,
    alt: "Для мужчин",
    line1: "HOT DEAL",
    line2: "FOR MEN",
  },
  {
    image: KIDS,
    alt: "Для детей",
    line1: "NEW ARRIVALS",
    line2: "FOR KIDS",
  },
  {
    image: ACCESSORIES,
    alt: "Акксесуары",
    line1: "LUXURIOUS & TRENDY",
    line2: "ACCESSORIES",
  },
];
</script>

<template>
  <DefaultLayout>
    <MainBanner />
    <div class="offer">
      <div
        class="offer__block"
        v-for="(offer, index) in offers"
        :key="index"
      >
        <img class="block__photo" :src="offer.image" :alt="offer.alt" />
        <div class="block__text">
          {{ offer.line1 }} <br />
          <span>{{ offer.line2 }}</span>
        </div>
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