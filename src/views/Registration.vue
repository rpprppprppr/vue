<script setup>
  import SecondaryLayout from "@/layouts/Secondary.vue";
  import arrowIcon from "@/assets/svg/arrow-left.svg";
  import checkIcon from "@/assets/svg/check.svg";
  import CustomInput from "@/components/other/CustomInput.vue";
  import CustomButton from "@/components/other/CustomButton.vue";
</script>

<template>
  <SecondaryLayout>
    <div class="registration">
      <div class="left">
        <div class="reg__block">
          <div class="reg__input-label">Your Name</div>
          <CustomInput placeholder="First Name" />
          <CustomInput placeholder="Last Name" />
        </div>

        <div class="reg">
          <CustomInput placeholder="Male" />
          <CustomInput placeholder="Female" />
        </div>

        <div class="reg__block">
          <div class="reg__input-label">Login Detail</div>
          <CustomInput placeholder="Email" />
          <CustomInput placeholder="Password" />
        </div>

        <div class="reg__text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</div>

        <CustomButton>JOIN NOW <img :src="arrowIcon" /></CustomButton>
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