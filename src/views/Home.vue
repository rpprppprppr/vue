<script setup>
  import { ROUTES } from "@/config/routes.js";
  import MainBanner from "@/components/MainBanner.vue";
  import Feature from "@/components/Feature.vue";
  import DefaultLayout from "@/layouts/Default.vue";
  import cartIcon from "@/assets/icons/cart.svg";

  const offerImages = import.meta.glob('@/assets/img/offer-*.png', { eager: true });
  const offerLabels = [
    { alt: "Для женщин", line1: "30% OFF", line2: "FOR WOMEN" },
    { alt: "Для мужчин", line1: "HOT DEAL", line2: "FOR MEN" },
    { alt: "Для детей", line1: "NEW ARRIVALS", line2: "FOR KIDS" },
    { alt: "Акксесуары", line1: "LUXURIOUS & TRENDY", line2: "ACCESSORIES" },
  ];
  const offers = offerLabels.map((label, i) => {
    const path = `/src/assets/img/offer-${i + 1}.png`;
    return {
      ...label,
      image: offerImages[path].default,
    };
  });

  const images = import.meta.glob('@/assets/img/product-*.png', { eager: true });
  const productInfo = {
    name: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
  };
  const products = Array.from({ length: 6 }, (_, i) => {
    const imgPath = `/src/assets/img/product-${i + 1}.png`;
    return {
      ...productInfo,
      image: images[imgPath].default,
    };
  });
</script>


<template>
  <DefaultLayout>
    <MainBanner />
    <div class="offer">
      <div class="offer__block" v-for="(offer, index) in offers" :key="index">
        <img class="offer__photo" :src="offer.image" :alt="offer.alt" />
        <div class="offer__text">
          {{ offer.line1 }} <br />
          <span>{{ offer.line2 }}</span>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="block__title">Fetured Items</div>
      <div class="block__subtitle">Shop for items based on what we featured in this week</div>
      <div class="products__block">
        <div class="product__card" v-for="(product, index) in products" :key="index">
          <div class="product__image-wrapper">
            <img class="product__photo" :src="product.image" />
            <div class="product__overlay">
              <button class="product__button">
                <img :src="cartIcon" alt="Корзина" width="26" /> Add to Cart
              </button>
            </div>
          </div>
          <div class="product__text">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__description">{{ product.description }}</div>
            <div class="product__price">{{ product.price }}</div>
          </div>
        </div>
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

  .offer__block {
    position: relative;
    display: flex;
    cursor: pointer;
  }

  .offer__block:nth-child(4) {
    grid-column: 1 / -1;
    width: 100%;
  }

  .offer__photo {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .offer__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    white-space: nowrap; 
  }

  .offer__text span {
    color: #F16D7F;
    font-weight: bold;
    font-size: 24px;
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

  .product__card {
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .product__image-wrapper {
    position: relative;
    overflow: hidden;

    .product__photo {
      display: block;
      width: 100%;
      transition: 0.3s ease;
    }

    .product__overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(58, 56, 56, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.3s ease;
    }

    .product__button {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      border-radius: 0;
      padding: 10px 14px;
      cursor: pointer;
      transition: 0.3s;
      text-align: center;
      display: flex;
      gap: 10px;
    }

    .product__button:hover {
      background-color: white;
      color: #9F9F9F;
    }
  }

  .product__card:hover .product__overlay {
    opacity: 1;
  }

  .product__text {
    padding: 25px 30px 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .product__name {
    font-size: 14px;
  }

  .product__description {
    color: #5D5D5D;
    font-size: 14px;
    font-weight: 300;
  }

  .product__price {
    color: #F16D7F;
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

    .offer__block:nth-child(4) {
      grid-column: 1 / -1;
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

    .offer__block:nth-child(4) {
      height: 110px;
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