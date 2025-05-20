<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

  import SecondaryLayout from "@/layouts/Secondary.vue";
  import ProductCard from "@/components/other/ProductCard.vue";
  import CustomSelect from "@/components/other/CustomSelect.vue";
  import productImg from "@/assets/img/product.png";
  import cartIcon from "@/assets/svg/cart-pink.svg";
  import prevIcon from "@/assets/svg/prev-page.svg";
  import nextIcon from "@/assets/svg/next-page.svg";

  const color = ref('')
  const size = ref('')
  const quantity = ref('')

  const windowWidth = ref(window.innerWidth)
  const updateWidth = () => { windowWidth.value = window.innerWidth }

  onMounted(() => { window.addEventListener('resize', updateWidth) })
  onBeforeUnmount(() => { window.removeEventListener('resize', updateWidth) })

  const images = import.meta.glob('@/assets/img/catalog-*.png', { eager: true });

  const productInfo = {
    name: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
  };

  const allProducts = Array.from({ length: 3 }, (_, i) => {
    const imgPath = `/src/assets/img/catalog-${i + 1}.png`;
    return {
      ...productInfo,
      image: images[imgPath].default,
    };
  })

  const cardsPerPage = computed(() => {
    if (windowWidth.value < 1600) return 2
    return 3
  })

  const visibleProducts = computed(() => allProducts.slice(0, cardsPerPage.value))
</script>

<template>
  <SecondaryLayout>
    <div class="product__container">
      <div class="slider">
        <img :src=productImg alt="Product Image" class="product__image" />
        <button class="slider__arrow left"><img :src="prevIcon" alt="Предыдущее фото" /></button>
        <button class="slider__arrow right"><img :src="nextIcon" alt="Следующее фото" /></button>
      </div>

      <div class="product__info">
        <div class="category">WOMEN COLLECTION</div>
        <div class="product__title">MOSCHINO CHEAP AND CHIC</div>
        <div class="product__description">
          Compellingly actualize fully researched processes before proactive outsourcing. 
          Progressively syndicate collaborative architectures before cutting-edge services. 
          Completely visualize parallel core competencies rather than exceptional portals. 
        </div>
        <div class="product__price">$561</div>

        <div class="options">
          <CustomSelect v-model="color" title="CHOOSE COLOR" :options="['Black', 'White']" :multiple="false" :showSelectedInTitle="true"/>
          <CustomSelect v-model="size" title="CHOOSE SIZE" :options="['S', 'M', 'L']" :multiple="false" :showSelectedInTitle="true"/>
          <CustomSelect v-model="quantity" title="QUANTITY" :options="['1', '2', '3']" :multiple="false" :showSelectedInTitle="true"/>
        </div>

        <button class="product__button">
          <img :src="cartIcon" alt="cart" width="26" /> Add to Cart
        </button>
      </div>
    </div>

    <div class="products">
        <ProductCard v-for="(product, index) in visibleProducts" :key="index" v-bind="product" />
    </div>
  </SecondaryLayout>
</template>

<style scoped lang="scss">
  .product__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    text-align: center;
  }

  .slider {
    position: relative;
    width: 100%;
    max-width: 1600px;
    background-color: #F7F7F7;
    padding-bottom: 50px;
  }

  .product__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slider__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(42, 42, 42, 0.15);
    border: 0;
    border-radius: 0;
    padding: 12px 16px;
  }

  .slider__arrow img {
    width: 13px;
  }

  .slider__arrow.left {
    left: 0;
  }

  .slider__arrow.right {
    right: 0;
  }

  .product__info {
    margin: -50px 230px 0;
    padding: 64px 200px;
    background-color: white;
    z-index: 1;
    border: 1px solid #EAEAEA;
  }

  .category {
    color: #F16D7F;
    font-size: 14px;
    font-weight: 300;

    position: relative;
    padding-bottom: 15px;
  }

  .category::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 45%;
    width: 64px;
    height: 3px;
    background-color: #EF5B70;
  }

  .product__title {
    color: #4D4D4D;
    font-size: 18px;
    font-weight: 300;

    margin: 12px 0 48px;
  }

  .product__description {
    color: #5E5E5E;
    font-size: 14px;
    font-weight: 300;
    max-width: 555px;

    margin-bottom: 32px;
  }

  .product__price {
    color: #EF5B70;
    font-size: 24px;
    font-weight: 300;

    padding-bottom: 64px;
    border-bottom: 1px solid #EAEAEA;
  }

  .options {
    display: flex;
    justify-content: center;
    gap: 22px;
    margin: 64px 0 48px;
    color: #6F6E6E;
    font-size: 14px;
  }

  .product__button {
    background-color: white;
    color: #F26376;
    border: 1px solid #F26376;
    border-radius: 0;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 14px;
    justify-self: center;
    justify-content: center;;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    gap: 10px;
  }

  .product__button:hover {
    background-color: #f1d5d8;
  }

  .products {
    padding: 128px 230px;
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1599px) {
    .slider {
      padding-bottom: 30px;
    }

    .product__info {
      margin: 0;
      padding: 64px 108px;
      max-width: 768px;
    }

    .products {
      padding: 128px 15px;
      grid-template-columns: repeat(2, 360px);
      gap: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    .slider {
      padding: 85px 0;
    }

    .product__image {
      height: 374px;
    }

    .product__info {
      padding: 64px 25px;
    }

    .options {
      font-size: 10px;
    }

    .products {
      padding: 64px 8px;
      grid-template-columns: repeat(1, 360px);
      gap: 5px
    }
  }
</style>