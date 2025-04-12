<template>
  <div class="subscribe">
    <div class="left">
      <img class="subscribe__photo" src="/src/assets/img/subscribe-photo.png" alt="Аватар">
      <div class="subscribe__quote">
        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span style="font-style: italic;">a pulvinar purus condimentum</span>“
      </div>
    </div>
    <div class="right">
      <div class="subscribe__text"> 
        <span style="font-weight: bold; font-size: 24px;">SUBSCRIBE</span> <br> FOR OUR NEWLETTER AND PROMOTION
      </div>
      <div class="subscribe__form">
        <input type="text" placeholder="Enter Your Email">
        <button>Subscribe</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .subscribe {
    background-image: url("src/assets/img/subscribe-background.png");
    background-size: cover;
    background-position: calc(25%) center;
    background-repeat: no-repeat;
    padding: 100px 230px;
    height: 448px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .left, .right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 360px;
  }

  .subscribe__photo {
    width: 96px;
    margin: 0 auto;
  }

  .subscribe__quote {
    font-size: 20px;
  }

  .right {
    width: 560px;
    padding-top: 50px;
  }

  .subscribe__text {
    font-size: 18px;
  }

  .subscribe__form input, button {
    width: 255px;
    height: 50px;
    border: none;
    border-radius: 30px 0 0 30px;
    background-color: #e1e1e1;
    font-size: 14px;
    padding: 7px 22px;
    box-sizing: border-box;
  }

  .subscribe__form button {
    width: 100px;
    border-radius: 0 30px 30px 0;
    background-color: #F16D7F;
    color: white;
    padding: 8px;
  }

  @media screen and (max-width: 1599px) {
    .subscribe {
      padding: 60px 105px 140px;
      flex-direction: column;
      align-items: center;
      height: 700px;
    }

    .right {
      width: fit-content;
      padding-top: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .subscribe {
      padding: 60px 16px 110px;
      height: 550px;
    }

    .subscribe__text {
      font-size: 14px;
    }

    .right {
      gap: 20px;
    }

    .subscribe__form input {
      width: 230px;
    }
  }
</style>