<script setup>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Subscribe from "@/components/Subscribe.vue";
</script>

<template>
  <Header />
  <slot />
  <Subscribe />
  <Footer />
</template>

<style scoped lang="scss"></style>