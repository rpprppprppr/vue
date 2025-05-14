<script setup>
  defineEmits(['click']);
</script>

<template>
  <button class="custom__button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
  .custom__button {
    display: flex;
    gap: 20px;
    padding: 16px 30px;
    background-color: #F16D7F;
    color: white;
    border-radius: 0;
    width: fit-content;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .custom__button:hover {
    background-color: #b8606b;
  }
</style>