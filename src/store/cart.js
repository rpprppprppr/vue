import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/api'
import { useProductStore } from './product.js'

export const useCartStore = defineStore('cart', () => {
    const api = useApi()
    const cart = ref(null)

    const getCart = async (userId) => {
        const productStore = useProductStore()
        const res = await api.get(`carts/user/${userId}`)
        const cartData = Array.isArray(res.data) ? res.data[0] : res.data

        if (!cartData) {
            cart.value = { id: null, userId, products: [] }
            return
        }

        const enrichedProducts = await Promise.all(
            cartData.products.map(async (item) => {
                const p = await productStore.fetchProduct(item.productId)
                return {
                    productId: p.id,
                    quantity: item.quantity,
                    title: p.title,
                    price: p.price,
                    image: p.image,
                    color: '---',
                    size: '---'
                }
            })
        )

        cart.value = {
            id: cartData.id,
            userId: cartData.userId,
            date: cartData.date,
            products: enrichedProducts
        }
    }

    const createCart = async (newCart) => {
        const res = await api.post(`carts`, newCart)
        cart.value = res.data
    }

    const updateCart = async (id, updatedCart) => {
        await api.put(`carts/${id}`, updatedCart)
        cart.value = updatedCart
    }

    const deleteCart = async (id) => {
        await api.delete(`carts/${id}`)
        cart.value = { id: null, userId: null, products: [] }
    }

    return {
        cart,
        getCart,
        createCart,
        updateCart,
        deleteCart
    }
})