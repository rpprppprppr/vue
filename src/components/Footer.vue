<script setup>
  import facebookIcon from "@/assets/svg/facebook-icon.svg";
  import instagramIcon from "@/assets/svg/instagram-icon.svg";
  import pinterestIcon from "@/assets/svg/pinterest-icon.svg";
  import twitterIcon from "@/assets/svg/twitter-icon.svg";
</script>

<template>
  <footer class="footer">
      <div class="left">&copy; 2021 Brand All Rights Reserved.</div>
      <div class="right">
          <a href="#" class="footer__icon"><img :src="facebookIcon" alt="Facebook" height="16"></a>
          <a href="#" class="footer__icon"><img :src="instagramIcon" alt="Instagram" height="16"></a>
          <a href="#" class="footer__icon"><img :src="pinterestIcon" alt="Pinterest" height="16"></a>
          <a href="#" class="footer__icon"><img :src="twitterIcon" alt="Twitter" height="16"></a>
      </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    margin-top: auto;
    padding: 24px 230px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #222224;
    color: white;
  }

  .left {
    color: #fbfbfb;
  }

  .right {
    display: flex;
    gap: 8px;
  }

  .footer__icon {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 1599px) {
    .footer {
      padding: 24px 32px;
    }
  }

  @media screen and (max-width: 767px) {
    .footer {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      padding: 40px 62px 10px;
      gap: 40px;
    }

    .right {
      justify-content: center;
    }
  }
</style>