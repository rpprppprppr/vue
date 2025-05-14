<script setup>
  import SecondaryLayout from "@/layouts/Secondary.vue";
  import CustomInput from "@/components/other/CustomInput.vue";
  import CustomButton from "@/components/other/CustomButton.vue";
  import CartCard from "@/components/other/CartCard.vue";
</script>

<template>
  <SecondaryLayout>
    <div class="cart">
      <div class="left">
        <CartCard image="src/assets/img/cart-1.png" name="MANGO  PEOPLE  T-SHIRT" price="$300" color="Red" size="XL" quantity=2 />
        <CartCard image="src/assets/img/cart-2.png" name="MANGO  PEOPLE  T-SHIRT" price="$300" color="Red" size="XL" quantity=2 />

        <div class="cart__buttons">
          <CustomButton class="cart__button">Clear shopping cart</CustomButton>
          <CustomButton class="cart__button">Continue shopping</CustomButton>
        </div>
      </div>

      <div class="right">
        <div class="adress__block">
          <div class="adress__input-label">SHIPPING ADRESS</div>
          <CustomInput placeholder="Bangladesh" />
          <CustomInput placeholder="State" />
          <CustomInput placeholder="Postcode / Zip" />
          <CustomButton class="adress__button">Get a quote</CustomButton>
        </div>

        <div class="total__block">
          <div class="subtotal__text">SUB TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$900</div>
          <div class="total__text">GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$900</span></div>
          <hr>
          <CustomButton class="total__button">PROCEED TO CHECKOUT</CustomButton>
        </div>
      </div>
    </div>
  </SecondaryLayout>
</template>

<style scoped lang="scss">
  .cart {
    padding: 96px 230px 128px;
    display: flex;
    gap: 128px;
    text-align: left;
    justify-content: center;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .cart__buttons {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
  }

  .cart__button, .adress__button {
    padding: 16px 40px;
    color: black;
    font-weight: 300;
    border: solid 1px #A4A4A4;
    background-color: white;
    text-transform: uppercase;
  }

  .cart__button:hover, .adress__button:hover {
    background-color: #A4A4A4;
  }

  .right {
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  .adress__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .adress__input-label {
    font-size: 16px;
  }

  .adress__button {
    padding: 10px 14px;
    font-size: 12px;
  }

  .total__block {
    background-color: #F5F3F3;
    padding: 40px 44px;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
  }

  .total__block hr {
    border: none;
    border-bottom: 1px solid #E2E2E2;
    margin: 8px 0;
    width: 274px;
  }

  .subtotal__text {
    font-weight: 400;
    font-size: 11px;
  }

  .total__text {
    font-weight: 300;
  }

  .total__text span {
    color: #F16D7F;
    font-weight: 700;
  }

  .total__button {
    max-width: 272px;
    width: 100%;
    font-weight: 300; 
  }

  @media screen and (max-width: 1599px) {
    .cart {
      padding: 60px 16px 128px;
      flex-wrap: wrap;
      gap: 64px;
    }

    .cart__buttons {
      margin-top: 22px;
      display: flex;
      gap: 48px;
      justify-content: center;
    }

    .right {
      flex-direction: row;
      gap: 16px;
      max-width: 734px;
      align-items: center;
    }

    .adress__block {
      width: 360px;
    }

    .total__block {
      height: fit-content;
    }
  }

  @media screen and (max-width: 767px) {
    .cart {
      padding: 40px 8px 96px;
      gap: 48px;
    }

    .left {
      gap: 32px;
    }

    .cart__buttons {
      margin-top: 0;
      gap: 8px;
    }

    .cart__button, .adress__button {
      padding: 10px 8px;
      font-size: 12px;
      width: 174px;
      text-transform: none;
    }

    .right {
      gap: 48px;
      flex-direction: column;
    }

    .adress__button {
      padding: 10px 20px;
      font-size: 12px;
      width: fit-content;
    }

    .total__block {
      background-color: #F5F3F3;
      padding: 40px 44px;
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .total__block hr {
      border: none;
      border-bottom: 1px solid #E2E2E2;
      margin: 8px 0;
      width: 274px;
    }

    .subtotal__text {
      font-weight: 400;
      font-size: 11px;
    }

    .total__text {
      font-weight: 300;
    }

    .total__text span {
      color: #F16D7F;
      font-weight: 700;
    }

    .total__button {
      max-width: 272px;
      width: 100%;
      font-weight: 300; 
    }
  }
</style>