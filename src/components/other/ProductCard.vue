<script setup>
  import { ROUTES } from "@/config/routes.js";
  import cartIcon from "@/assets/icons/cart.svg";
  
  defineProps({
    image: String,
    name: String,
    description: String,
    price: String
  });
</script>

<template>
  <div class="product__card">
    <div class="product__image-wrapper">
      <img class="product__photo" :src="image" :alt="name" />
      <div class="product__overlay">
        <button class="product__button">
          <img :src="cartIcon" alt="Корзина" width="26" /> Add to Cart
        </button>
      </div>
    </div>
    <RouterLink :to="{ name: ROUTES.PRODUCT }">
      <div class="product__text">
        <div class="product__name">{{ name }}</div>
        <div class="product__description">{{ description }}</div>
        <div class="product__price">{{ price }}</div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .product__card {
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .product__image-wrapper {
    position: relative;
    overflow: hidden;
  }

  .product__image-wrapper:hover .product__overlay {
    opacity: 1;
  }

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
    background-color: rgba(58, 56, 56, 0.8);
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
    padding: 10px 14px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    gap: 10px;
  }

  .product__button:hover {
    background-color: white;
    color: #9F9F9F;
  }

  .product__text {
    padding: 25px 30px 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .product__name {
    color: black;
    font-size: 14px;
    text-decoration: none;
  }

  .product__description {
    color: #5D5D5D;
    font-size: 14px;
    font-weight: 300;
  }

  .product__price {
    color: #F16D7F;
  }
</style>  