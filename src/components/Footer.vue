<script setup>
  import facebookIcon from "@/assets/icons/facebook-icon.svg";
  import instagramIcon from "@/assets/icons/instagram-icon.svg";
  import pinterestIcon from "@/assets/icons/pinterest-icon.svg";
  import twitterIcon from "@/assets/icons/twitter-icon.svg";
</script>

<template>
  <footer style="background-color: #222224; color: white; text-align: center; padding: 15px 0; width: 1600px; height: 80px; position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);">
      <p style="margin: 0;">&copy; 2021 Brand All Rights Reserved.</p>
      <div style="margin-top: 10px;">
          <a href="#" style="margin: 0 5px;"><img :src="facebookIcon" alt="Facebook" width="24"></a>
          <a href="#" style="margin: 0 5px;"><img :src="instagramIcon" alt="Instagram" width="24"></a>
          <a href="#" style="margin: 0 5px;"><img :src="pinterestIcon" alt="Pinterest" width="24"></a>
          <a href="#" style="margin: 0 5px;"><img :src="twitterIcon" alt="Twitter" width="24"></a>
      </div>
  </footer>
</template>

<style scoped lang="scss"></style>