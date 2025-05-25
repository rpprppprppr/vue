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
                    color: item.color || '---',
                    size: item.size || '---',
                }
            })
        )

        cart.value = {
            id: cartData.id,
            userId: cartData.userId,
            date: cartData.date,
            products: enrichedProducts,
        }
    }

    const createCart = async (newCart) => {
        const res = await api.post(`carts`, newCart)
        cart.value = res.data
    }

    const updateCart = async (id, updatedCart) => {
        const res = await api.put(`carts/${id}`, updatedCart)
        cart.value = res.data 
    }

    const deleteCart = async (id) => {
        await api.delete(`carts/${id}`)
        cart.value = { id: null, userId: null, products: [] }
    }

    const addToCart = async (productToAdd) => {
        if (cart.value && cart.value.products) {
            const existingIndex = cart.value.products.findIndex(p =>
                p.productId === productToAdd.productId &&
                p.color === productToAdd.color &&
                p.size === productToAdd.size
            )
            let updatedProducts
            if (existingIndex !== -1) {
                updatedProducts = [...cart.value.products]
                updatedProducts[existingIndex].quantity += productToAdd.quantity
            } else {
                updatedProducts = [...cart.value.products, productToAdd]
            }

            await updateCart(cart.value.id, { ...cart.value, products: updatedProducts })
        } else {
            await createCart({ userId: cart.value?.userId || null, products: [productToAdd] })
        }
    }

    return {
        cart,
        getCart,
        createCart,
        updateCart,
        deleteCart,
        addToCart,
    }
})