<script setup>
  import deliveryIcon from "@/assets/icons/delivery.svg";
  import saleIcon from "@/assets/icons/sale.svg";
  import qualityIcon from "@/assets/icons/quality.svg";

  const sharedText = "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.";

  const features = [
    {icon: deliveryIcon, alt: "Доставка", width: 45, title: "Free Delivery", text: sharedText,},
    {icon: saleIcon, alt: "Скидки", width: 40, title: "Sales & discounts", text: sharedText,},
    {icon: qualityIcon, alt: "Качество", width: 47, title: "Quality assurance",text: sharedText,},
  ];
</script>

<template>
  <div class="feature">
    <div class="feature__block" v-for="(feature, index) in features" :key="index">
      <img :src="feature.icon" :alt="feature.alt" :width="feature.width" />
      <div class="block__title">{{ feature.title }}</div>
      <div class="block__text">{{ feature.text }}</div>
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