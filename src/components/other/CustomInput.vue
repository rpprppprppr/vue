<script setup>
  defineProps({
    placeholder: String,
    name: String,
    id: String
  });
</script>

<template>
  <input
    type="text"
    class="custom__input"
    :placeholder="placeholder"
    :name="name"
    :id="id"
  />
</template>

<style scoped lang="scss">
  .custom__input {
    border: solid 1px #A4A4A4;
    padding: 16px;

    color: #B1B1B1;
    font-size: 13px;
  }
</style>