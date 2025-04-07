<script setup>
  import photo from "@/assets/img/main-banner-photo.png";
</script>

<template>
  <div class="main-banner">
    <div class="left">
      <img class="main-banner__photo" :src="photo" alt="Баннер">
    </div>
    <div class="right">
      <div class="main-banner__text"> 
        <span class="text-brand">THE BRAND</span><br> OF LUXERIOUS <span style="color: #F16D7F;">FASHION</span> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-banner {
    background-color: #F1E4E6;
    display: flex;
    gap: 60px;
  }

  .main-banner__text {
    text-align: left;
    font-weight: bold;
    color: #222222;
    font-size: 32px;
    margin-top: 290px;
    padding-left: 16px;
    border-left: 12px solid #F16D7F;
  }

  .text-brand {
    font-size: 48px;
    font-family: "Lato Black", sans-serif;
  }

  @media screen and (max-width: 1599px) {
    .main-banner {
      justify-content: center;
      gap: 40px;
    }

    .main-banner__photo {
      width: 386px;
    }

    .main-banner__text {
      font-size: 24px;
      margin-top: 130px;
    }

    .text-brand {
      font-size: 44px;
    }
  }

  @media screen and (max-width: 767px) {
    .main-banner {
      height: 360px;
    }

    .left {
      display: none;
    }

    .main-banner__text {
      font-size: 20px;
      margin-top: 150px;
    }

    .text-brand {
      font-size: 38px;
    }
  }  
</style>