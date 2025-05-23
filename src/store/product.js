import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useApi } from '@/api/index.js'

export const useProductStore = defineStore('product', () => {
        const { get } = useApi()
        const product = ref(null)

        const fetchProduct = async (id) => {
        const productResponse = await get(`/products/${id}`)
        const p = productResponse.data

        product.value = {
            id: p.id,
            title: p.title,
            description: p.description,
            price: parseFloat(p.price).toFixed(2),
            image: p.image,
            category: p.category,
        }
    }

    return {
        product,
        fetchProduct,
    }
})