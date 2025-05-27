<script setup>
  import { onMounted } from 'vue'
  import { useUserStore } from '@/store/user.js'
  import { useCartStore } from '@/store/cart.js'

  const userStore = useUserStore()
  const cartStore = useCartStore()

  onMounted(() => {
    userStore.getAllUsers()
  })

  const handleChange = async (e) => {
    const value = e.target.value

    if (value === 'new') {
      userStore.clearUser()
      cartStore.cart = { id: null, userId: null, products: [] }
    } else {
      const id = parseInt(value)
      userStore.selectedUserId = id
      await userStore.getUser(id)
      await cartStore.getCart(id)
    }
  }
</script>

<template>
  <div class="user-select">
    <select @change="handleChange" :value="userStore.selectedUserId ?? 'new'">
      <option value="new">-- New User --</option>
      <option v-for="u in userStore.users" :key="u.id" :value="u.id">
        {{ u.name.firstname }} {{ u.name.lastname }}
      </option>
    </select>
  </div>
</template>

<style scoped>
  .user-select {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>