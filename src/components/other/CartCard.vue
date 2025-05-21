<script setup>
  import { ref, watch } from 'vue'
  import closeIcon from "@/assets/svg/close.svg";

  const props = defineProps({
    image: String,
    title: String,
    price: String,
    color: String,
    size: String,
    quantity: Number
  });

  const emit = defineEmits(['remove', 'update'])
  const selectedQuantity = ref(props.quantity || 1);

  watch(selectedQuantity, (newQuantity) => {
    emit('update', { quantity: newQuantity })
  })
</script>

<template>
  <div class="cart__card">
    <img class="card__photo" :src="image" />
    <button class="close__button" @click="emit('remove')">
      <img :src="closeIcon" alt="Закрыть" width="26" />
    </button>

    <div class="card__info">
      <div class="card__title">{{ title }}</div>
      <div class="card__text">Price: <span class="price">${{ price }}</span></div>
      <div class="card__text">Color: {{ color }}</div>
      <div class="card__text">Size: {{ size }}</div>
      <div class="card__text">Quantity: 
        <select v-model="selectedQuantity">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cart__card {
    position: relative;
    display: flex;
    gap: 30px;
    width: 652px;
    height: 306px;
    box-shadow: 17px 19px 24px 0 rgba(0, 0, 0, 0.13);
  }

  .card__photo {
    width: 262px;
    height: 306px;
  }

  .close__button {
    position: absolute;
    right: 22px;
    top: 28px;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .close__button img {
    width: 18px;
  }

  .card__info {
    margin-top: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    max-width: 200px;
    color: #575757;
  }

  .card__title {
    color: #222222;
    font-size: 24px;
    margin-bottom: 36px;
  }

  .price {
    color: #EF5B70;
  }

  .card__text select {
    margin-left: 24px;
    border: solid 1px #EAEAEA;
    border-radius: 0;
    padding: 1px 10px;
    color: #656565;
    font-size: 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  @media screen and (max-width: 1599px) {
    .cart__card {
      width: 734px;
    }
  }

  @media screen and (max-width: 767px) {
    .cart__card {
      gap: 16px;
      width: 358px;
      height: 188px;
      box-shadow: 8px 8px 21px 0 rgba(0, 0, 0, 0.13);
    }

    .card__photo {
      height: 188px;
    }

    .close__button {
      right: 12px;
      top: 16px;
    }

    .close__button img {
      width: 10px;
    }

    .card__info {
      margin-top: 14px;
      font-size: 14px;
      max-width: 140px;
    }

    .card__title {
      font-size: 16px;
      margin-bottom: 26px;
    }

    .card__text select {
      font-size: 10px;
      padding: 1px 6px;
    }
  }
</style>  