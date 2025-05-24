import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import { useApi } from '@/api/index.js'

export const useCatalogStore = defineStore('catalog', () => {
    const { get } = useApi()

    const allProducts = ref([])
    
    const filters = ref({
        categories: [],
        priceRange: null,
    })
    
    const categories = computed(() => {
        const cats = new Set(allProducts.value.map(p => p.category))
        return Array.from(cats)
    })
    
    const priceBounds = computed(() => {
        if (allProducts.value.length === 0) return { min: 0, max: 0 }
        const prices = allProducts.value.map(p => p.price)
        return { min: Math.min(...prices), max: Math.max(...prices) }
    })
    
    const filteredProducts = computed(() => {
        return allProducts.value.filter(product => {
            const categoryMatch = filters.value.categories.length > 0
                ? filters.value.categories.includes(product.category)
                : true
            const priceMatch = filters.value.priceRange
                ? product.price >= filters.value.priceRange.min && product.price <= filters.value.priceRange.max
                : true
            return categoryMatch && priceMatch
        })
    })
    
    const pagination = ref({
        page: 1,
        limit: 9,
    })

    const paginatedProducts = computed(() => {
        const start = (pagination.value.page - 1) * pagination.value.limit
        return filteredProducts.value.slice(start, start + pagination.value.limit)
    })

    const totalPages = computed(() => {
        return Math.ceil(filteredProducts.value.length / pagination.value.limit)
    })

    const updateLimitByWidth = async (width) => {
        pagination.value.limit = width >= 768 && width < 1600 ? 8 : 9
        await readCatalog()
    }

    const readCatalog = async () => {
        const response = await get('/products')
        allProducts.value = response.data
    }

    const getCatalog = computed(() => allProducts.value)

    watch(() => filters.value.categories, async () => {
        pagination.value.page = 1
        await readCatalog()
    }, { immediate: true })

    watch(() => filters.value.priceRange, () => {
        pagination.value.page = 1
    })

    const setPage = (newPage) => {
        pagination.value.page = newPage
    }

    const setCategories = (categories) => {
        filters.value.categories = categories
    }

    const setPriceRange = (range) => {
        filters.value.priceRange = range
    }

    return {
        // Основные методы стора
        getCatalog,
        readCatalog,

        // Filter
        categories,
        priceBounds,
        filters,
        setCategories,
        setPriceRange,

        // Pagination
        paginatedProducts,
        updateLimitByWidth,
        totalPages,
        pagination,
        setPage,
    }
})