import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useApi } from '@/api/index.js'

export const useUserStore = defineStore('user', () => {
    const { get, post } = useApi()

    const users = ref([])
    const user = ref(null)
    const selectedUserId = ref(null)

    const getAllUsers = async () => {
        const res = await get('/users')
        users.value = res.data
    }

    const getUser = async (id) => {
        const res = await get(`/users/${id}`)
        user.value = res.data
    }

    const registerUser = async (userData) => {
        const res = await post('/users', userData)
        user.value = res.data
    }

    const clearUser = () => {
        user.value = null
        selectedUserId.value = null
    }

    return {
        user,
        users,
        selectedUserId,
        getAllUsers,
        getUser,
        registerUser,
        clearUser,
    }
})