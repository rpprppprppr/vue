<script setup>
  import Banner from "@/components/Banner.vue";
  import DefaultLayout from "@/layouts/Default.vue";
</script>

<template>
  <DefaultLayout>
    <Banner />
    <slot />
  </DefaultLayout>
</template>

<style scoped lang="scss"></style>