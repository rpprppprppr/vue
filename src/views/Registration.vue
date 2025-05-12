<script setup>
  import SecondaryLayout from "@/layouts/Secondary.vue";
  import arrowIcon from "@/assets/icons/arrow-left.svg";
  import checkIcon from "@/assets/icons/check.svg";
</script>

<template>
  <SecondaryLayout>
    <div class="registration">
      <div class="left">
        <div class="reg__block">
          <div class="reg__input-label">Your Name</div>
          <input type="text" class="reg__input" name="" id="" placeholder="First Name">
          <input type="text" class="reg__input" name="" id="" placeholder="Last Name">
        </div>

        <div class="reg">
          <label><input class="reg__radio" type="radio" name="" id="">Male</label>
          <label><input class="reg__radio" type="radio" name="" id="">Female</label>
        </div>

        <div class="reg__block">
          <div class="reg__input-label">Login Detail</div>
          <input type="text" class="reg__input" name="" id="" placeholder="Email">
          <input type="text" class="reg__input" name="" id="" placeholder="Password">
        </div>

        <div class="reg__text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</div>

        <button class="reg__button">JOIN NOW <img :src="arrowIcon" /></button>
      </div>

      <div class="right">
        <div class="reg__info">LOYALTY HAS ITS PERKS</div>
        <div class="reg__info">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</div>
        <div class="reg__list">
          <div class="reg__item"><img :src="checkIcon" />15% off welcome offer</div>
          <div class="reg__item"><img :src="checkIcon" />Free shipping, returns and exchanges on all orders</div>
          <div class="reg__item"><img :src="checkIcon" />$10 off a purchase on your birthday</div>
          <div class="reg__item"><img :src="checkIcon" />Early access to products</div>
          <div class="reg__item"><img :src="checkIcon" />Exclusive offers & rewards</div>
        </div>
      </div>
    </div>
  </SecondaryLayout>
</template>

<style scoped lang="scss">
  .registration {
    display: flex;
    justify-content: space-between;
    padding: 64px 230px 96px;
    text-align: left;

    font-weight: 300;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 360px;
    width: 100%;

    font-size: 16px;
    color: #222222;
  }

  .reg__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reg__input {
    border: solid 1px #A4A4A4;
    padding: 16px;

    color: #B1B1B1;
    font-size: 13px;
  }

  .reg {
    display: flex;
    gap: 20px;
  }

  .reg__radio {
    margin-right: 15px;
    accent-color: gray; 
    transform: scale(1.5);
  }

  .reg__text {
    font-size: 13px;
    color: #B1B1B1;

    margin-top: -15px;
  }

  .reg__button {
    display: flex;
    gap: 20px;
    padding: 16px 30px;
    background-color: #F16D7F;
    color: white;
    border-radius: 0;
    width: fit-content;
  }

  .reg__button:hover {
    background-color: #b8606b;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 652px;
    font-size: 24px;
    color: black;
  }

  .reg__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .reg__item {
    display: flex;
    gap: 24px;
  }

  @media screen and (max-width: 1599px) {
    .registration {
      gap: 22px;
      padding: 40px 16px 96px;
    }

    .right {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    .registration {
      gap: 40px;
      flex-wrap: wrap;
      padding: 40px 8px 96px;
    }

    .left, .right {
      max-width: 100vw;
      width: 100%;
    }
  }
</style>