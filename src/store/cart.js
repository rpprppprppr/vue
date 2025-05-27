import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/api'
import { useProductStore } from './product.js'

export const useCartStore = defineStore('cart', () => {
    const api = useApi()
    const cart = ref(null)
    const isLocallyModified = ref(false)

    const getCart = async (userId) => {
        if (isLocallyModified.value && cart.value?.userId === userId) {
            return
        }

        const productStore = useProductStore()
        const res = await api.get(`carts/user/${userId}`)
        const cartData = Array.isArray(res.data) ? res.data[0] : res.data

        if (!cartData) {
            cart.value = { id: null, userId, products: [] }
            isLocallyModified.value = false
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
        isLocallyModified.value = false
    }

    const createCart = async (newCart) => {
        const res = await api.post(`carts`, {
            userId: newCart.userId,
            date: new Date().toISOString(),
            products: newCart.products,
        })
        cart.value = res.data
        isLocallyModified.value = true
        return res.data
    }

    const updateCart = async (id, updatedCart) => {
        const res = await api.put(`carts/${id}`, updatedCart)
        cart.value = res.data
        isLocallyModified.value = true
    }

    const deleteCart = async (id) => {
        await api.delete(`carts/${id}`)
        cart.value = { id: null, userId: null, products: [] }
        isLocallyModified.value = true
    }

    const addToCart = async (productToAdd, userId) => {
        if (!userId) {
            console.error('User ID is required to add to cart')
            return
        }

        if (!cart.value) {
            await getCart(userId)
        }

        if (!cart.value || !cart.value.id) {
            await createCart({
                userId,
                products: [productToAdd],
            })
        } else {
            const existingIndex = cart.value.products.findIndex(
                (p) =>
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

            await updateCart(cart.value.id, {
                ...cart.value,
                products: updatedProducts,
            })
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