<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Subscribe from "@/components/Subscribe.vue";
</script>

<template>
  <div>
    <Header />
    <slot />
    <Subscribe />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
