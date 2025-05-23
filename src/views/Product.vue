<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useWindowSize } from '@vueuse/core'

import { useCatalogStore } from '@/store/catalog.js'
import { useProductStore } from '@/store/product.js'

import SecondaryLayout from "@/layouts/Secondary.vue"
import CustomSelect from "@/components/other/CustomSelect.vue"
import ProductCard from '@/components/other/ProductCard.vue'

import cartIcon from "@/assets/svg/cart-pink.svg"
import prevIcon from "@/assets/svg/prev-page.svg"
import nextIcon from "@/assets/svg/next-page.svg"

const color = ref('')
const size = ref('')
const quantity = ref('')

const { width } = useWindowSize()
const route = useRoute()

const catalogStore = useCatalogStore()
const productStore = useProductStore()

const { getCatalog } = storeToRefs(catalogStore)
const { product } = storeToRefs(productStore)

const sliderImages = ref([])
const currentSlide = ref(0)

const loadProduct = async (id) => {
  await productStore.fetchProduct(id)

  const totalSlides = 3
  sliderImages.value = Array.from({ length: totalSlides }, () => product.value.image)
  currentSlide.value = 0
}

onMounted(async () => {
  const id = route.params.id
  await loadProduct(id)
  await catalogStore.readCatalog(3)
})

watch(() => route.params.id, async (newId) => {
  await loadProduct(newId)
})

const cardsPerPage = computed(() => (width.value < 1600 ? 2 : 3))
const visibleProducts = computed(() => getCatalog.value.slice(0, cardsPerPage.value))

const currentImage = computed(() => {
  if (sliderImages.value.length === 0) return ''
  return sliderImages.value[currentSlide.value]
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + sliderImages.value.length) % sliderImages.value.length
}
</script>

<template>
  <SecondaryLayout>
    <div v-if="product" class="product__container">
      <div class="slider">
        <img :src="currentImage" class="product__image" />
        <button class="slider__arrow left" @click="prevSlide">
          <img :src="prevIcon" alt="Предыдущее фото" />
        </button>
        <button class="slider__arrow right" @click="nextSlide">
          <img :src="nextIcon" alt="Следующее фото" />
        </button>
      </div>

      <div class="product__info">
        <div class="category">{{ product.category }}</div>
        <div class="product__title">{{ product.title }}</div>
        <div class="product__description">{{ product.description }}</div>
        <div class="product__price">${{ product.price }}</div>

        <div class="options">
          <CustomSelect v-model="color" title="CHOOSE COLOR" :options="['Black', 'White']" :multiple="false" :showSelectedInTitle="true"/>
          <CustomSelect v-model="size" title="CHOOSE SIZE" :options="['S', 'M', 'L']" :multiple="false" :showSelectedInTitle="true"/>
          <CustomSelect v-model="quantity" title="QUANTITY" :options="['1', '2', '3']" :multiple="false" :showSelectedInTitle="true"/>
        </div>

        <button class="product__button">
          <img :src="cartIcon" alt="cart" width="26" /> Add to Cart
        </button>
      </div>

      <div class="products">
        <ProductCard v-for="(productItem, index) in visibleProducts" :key="index" v-bind="productItem" />
      </div>
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
    max-height: 700px;
    transition: opacity 0.4s ease;
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
    text-transform: uppercase;
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