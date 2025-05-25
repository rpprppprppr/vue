<script setup>
  import { defineEmits, defineProps } from 'vue'

  const props = defineProps({
    modelValue: String,
    placeholder: String,
    name: String,
    id: String,
    disabled: Boolean
  })

  const emit = defineEmits(['update:modelValue'])

  function onInput(event) {
    emit('update:modelValue', event.target.value)
  }
</script>

<template>
  <input type="text"
    class="custom__input"
    :placeholder="props.placeholder"
    :name="props.name"
    :id="props.id"
    :disabled="props.disabled"
    :value="props.modelValue"
    @input="onInput"
  />
</template>

<style scoped lang="scss">
  .custom__input {
    border: solid 1px #A4A4A4;
    padding: 16px;

    color: #B1B1B1;
    font-size: 13px;
  }

  .custom__input:disabled {
    border: solid 1px #aaaaaa;
    background-color: #e2e2e2;
  }
</style>