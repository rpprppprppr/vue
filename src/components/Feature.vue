<script setup>
  import deliveryIcon from "@/assets/icons/delivery.svg";
  import saleIcon from "@/assets/icons/sale.svg";
  import qualityIcon from "@/assets/icons/quality.svg";
</script>

<template>
  <div class="feature">
    <div class="feature__block">
      <img :src="deliveryIcon" alt="Доставка" width="45" />
      <div class="block__title">Free Delivery</div>
      <div class="block__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
    </div>
    <div class="feature__block">
      <img :src="saleIcon" alt="Скидки" width="40" />
      <div class="block__title">Sales & discounts</div>
      <div class="block__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
    </div>
    <div class="feature__block">
      <img :src="qualityIcon" alt="Качество" width="47" />
      <div class="block__title">Quality assurance</div>
      <div class="block__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .feature {
    width: 100%;
    padding: 105px 230px;
    box-sizing: border-box;
    display: flex;
    gap: 30px;
    background: #222224;
  }

  .feature__block {
    width: 360px;
    color: #FBFBFB;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    align-items: center;
  }

  .block__title {
    font-size: 20px;
  }

  .block__text {
    color: #fbfbfb9d;
    font-weight: 300;
    font-size: 14px;
  }

  @media screen and (max-width: 1599px) {
    .feature {
      padding: 60px 204px;
      flex-direction: column;
      gap: 50px;
      align-items: center;
    }
  }

  @media screen and (max-width: 767px) {
    .feature {
      padding: 60px 10px;
      gap: 50px;
    }

    .feature__block {
      width: 350px;
    }
  }
</style>