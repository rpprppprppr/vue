import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useApi } from '@/api/index.js'

export const useCatalogStore = defineStore('catalog', () => {
        const { get } = useApi()
        const catalog = ref([])

        const readCatalog = async (limit) => {
        const queryLimit = limit ? `?limit=${limit}` : ''
        const catalogResponse = await get(`/products${queryLimit}`)
        catalog.value = catalogResponse.data.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: parseFloat(item.price).toFixed(2),
            image: item.image
        }))
        }

        const getCatalog = computed(() => catalog.value)

        return {
        getCatalog,
        readCatalog,
    }
})