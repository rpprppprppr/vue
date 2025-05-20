<script setup>
  import { ROUTES } from "@/config/constants/routes.js";
  defineProps({
    image: String,
    description: String,
    category: String
  });
</script>

<template>
  <div class="offer__block">
    <RouterLink :to="{ name: ROUTES.CATALOG }">
      <img class="offer__photo" :src="image" />
      <div class="offer__text">
        {{ description }} <br />
        <span>{{ category }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .offer__block {
    position: relative;
    display: flex;

    &:nth-child(4) {
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

      span {
        color: #F16D7F;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
</style>