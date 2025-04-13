<script setup>
  import { ref, computed } from 'vue'
  import prevIcon from "@/assets/icons/prev-page.svg";
  import nextIcon from "@/assets/icons/next-page.svg";

  const props = defineProps({
    totalPages: {
      type: Number,
      required: true,
      default: 20
    },
    modelValue: {
      type: Number,
      default: 1
    }
  })

  const emit = defineEmits(['update:modelValue'])
  const currentPage = ref(props.modelValue)

  const goToPage = (page) => {
    if (page >= 1 && page <= props.totalPages && page !== '...') {
      currentPage.value = page
      emit('update:modelValue', page)
    }
  }

  const visiblePages = computed(() => {
    const pages = []
    const total = props.totalPages
    const current = currentPage.value

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i)
    } 
    else {
      if (current <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', total)
      } else if (current >= total - 3) {
        pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total)
      }
    }

    return pages
  })
</script>

<template>
  <div class="paginator">
    <button class="nav-btn" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      <img :src="prevIcon" alt="Предыдущая страницы" />
    </button>

    <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :disabled="page === '...'" :class="['page-btn', { active: currentPage === page, dots: page === '...' }]">
      {{ page }}
    </button>

    <button class="nav-btn" @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
      <img :src="nextIcon" alt="Следующая страницы" />
    </button>
  </div>
</template>

<style scoped lang="scss">
  .paginator {
    display: flex;
    gap: 18px;
    padding: 8px 12px;
    border: 1px solid #EBEBEB;
    width: fit-content;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .page-btn, .nav-btn {
    border: none;
    background: none;
    padding: 2px 5px;
    font-weight: 300;
    font-size: 16px;
    color: #C4C4C4;
    cursor: pointer;
  }

  .page-btn:hover:not(.active):not(:disabled), .nav-btn:hover:not(:disabled) {
    background-color: #eee;
  }

  .page-btn.active {
    color: #ef5b70;
  }

  .page-btn.dots {
    cursor: default;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
</style>  