import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useApi } from '@/api/index.js'

export const useCatalogStore = defineStore('catalog', () => {
    const { get } = useApi()

    const catalog = ref([])
    const pagination = ref({
        page: 1,
        limit: 9,
    })

    const readCatalog = async (limit) => {
        const queryLimit = limit ? `?limit=${limit}` : ''
        const response = await get(`/products${queryLimit}`)
        catalog.value = response.data.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: parseFloat(item.price).toFixed(2),
            image: item.image
        }))
    }

    const getCatalog = computed(() => catalog.value)

    const totalPages = computed(() =>
        Math.ceil(catalog.value.length / pagination.value.limit)
    )

    const updateLimitByWidth = async (width) => {
        pagination.value.limit = width >= 768 && width < 1600 ? 8 : 9
        await readCatalog()
    }

    const paginatedProducts = computed(() => {
        const start = (pagination.value.page - 1) * pagination.value.limit
        return catalog.value.slice(start, start + pagination.value.limit)
    })

    const setPage = (newPage) => {
        pagination.value.page = newPage
    }

    return {
        // Основные методы стора
        getCatalog,
        readCatalog,

        // Pagination
        paginatedProducts,
        updateLimitByWidth,
        totalPages,
        pagination,
        setPage
    }
})