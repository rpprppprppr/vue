<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    title: String,
    options: Array,
    modelValue: [Array, String],
    multiple: {
        type: Boolean,
        default: true,
    },
    showSelectedInTitle: {
      type: Boolean,
      default: false,
    }
  })

  const displayTitle = computed(() => {
    if (!props.showSelectedInTitle) return props.title

    if (props.multiple) {
      return props.modelValue.length > 0 ? `${props.title}: ${props.modelValue.join(', ')}` : props.title
    } else {
      return props.modelValue ? `${props.title}: ${props.modelValue}` : props.title
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const isOpen = ref(false)
  const selectRef = ref(null)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const handleChange = (option) => {
    if (props.multiple) {
        const selected = new Set(props.modelValue)
        if (selected.has(option)) {
        selected.delete(option)
        } else {
        selected.add(option)
        }
        emit('update:modelValue', Array.from(selected))
    } else {
        emit('update:modelValue', option)
        isOpen.value = false
    }
  }

  const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <div class="filter" ref="selectRef">
    <div class="filter__name" @click="toggle">
      {{ displayTitle }}
      <img src="@/assets/icons/arrow.svg" />
    </div>

    <div v-if="isOpen" class="filter__menu filter__menu--simple">
      <div class="items__list">
        <label v-for="option in options" :key="option">
          <input
            :type="multiple ? 'checkbox' : 'radio'"
            class="items__checkbox"
            :name="title"
            :checked="multiple ? modelValue.includes(option) : modelValue === option"
            @change="handleChange(option)"
          />
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .filter {
    position: relative;
  }

  .filter__name {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }

  .filter__menu {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 320px;
    padding: 16px;
    position: absolute;
    background: white;
    z-index: 10;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.2);
  }

  .filter__menu--simple {
    width: max-content;
    padding: 8px 10px;
    gap: 5px;
  }

  .items__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
  }

  .items__checkbox {
    accent-color: #EBEBEB;
  }
</style>